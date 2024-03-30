// time of day

import { useState, useEffect } from 'react';
import { getSunrise, getSunset } from 'sunrise-sunset-js';

const Time = (props) => {
	
  const [timeToPaint, setTimeToPaint] = useState('');

  const parseTimeInput = (input) => {
    if (!input) { return []; }
    let numbers = input.match(/[-+]?[0-9]*[0-9]+/g)
    if (numbers && numbers.length === 1) { numbers.push("0") }
    return numbers;
  }
  
  const convertTime = (timeArr, isStart) => {
    if (timeArr && timeArr.length === 2) {
      return timeArr.map(num => parseInt(num));
    }
    else {
      let today = new Date();
      let centralCoords = [40.7812, -73.9665] // TODO: Refactor so that it uses the actual coordinates chosen, not Central Park
      if (isStart) {
        const date = getSunrise(centralCoords[0], centralCoords[1], today); 	 
        return [date.getHours(), date.getMinutes()]; 
	  }
      else {
        const date = getSunset(centralCoords[0], centralCoords[1], today);
        return [date.getHours(), date.getMinutes()]; 
	  }
    }
  } 

  const chooseTime = (timeBounds) => {
    let startTime = convertTime(parseTimeInput(timeBounds.start), true);
    let endTime = convertTime(parseTimeInput(timeBounds.end), false); // TODO: Do auto-military time automatically
    let startMinutes = (startTime[0] * 60) + startTime[1]; // we are doing it this way because the sunrise/sunset library can be off by 1 day
    let endMinutes = (endTime[0] * 60) + endTime[1];
    let chosenTime = Math.floor(startMinutes + Math.random() * (endMinutes - startMinutes));
    let chosenHours = Math.floor(chosenTime / 60);
    let chosenMinutes = chosenTime - (chosenHours * 60);
    if (chosenMinutes < 10) { chosenMinutes = "0" + chosenMinutes };
    return (chosenHours + ":" + chosenMinutes);
   }

  useEffect(() => {
    setTimeToPaint(chooseTime(props.time));
  }, [props.submitted]);
  
   return (
      <>
	  <br/>
	  <span><strong>Start painting at:</strong> {timeToPaint}</span>
      </>
    );
}

export default Time;