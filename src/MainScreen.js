import { useState } from 'react'
import Settings from './Settings';
import About from './About';
import Output from './Output';

const MainScreen = () => {
  const [submitted, setSubmitted] = useState(false);	
  const initBoroughs = {manhattan: false, queens: false, brooklyn: false, bronx: false, staten: false};	
  const [boroughs, setBoroughs] = useState(initBoroughs);
  const initTime = {start: '8:00', end: '17:00'}
  const [time, setTime] = useState(initTime);
  const [coords, setCoords] = useState();
  const [paint, setPaint] = useState(false);
  const [canvas, setCanvas] = useState(false);
	
  const submitFormData = (data) => {
    setBoroughs(data.boroughs);
	setPaint(data.paint);
	setCanvas(data.canvas);
	setTime(data.time);
	setSubmitted(!submitted);
  };
  
  return (
    <div>
	  <h3>art coordinates</h3>
	  <p>a generator of algorithmic field painting coordinates and constraints</p>
	  <About /> 
	  <hr />
      <Settings boroughs={boroughs} time={time} paint={paint} canvas={canvas} submitFormData={submitFormData} />
	  <Output chosenBoroughs={boroughs} time={time} paint={paint} canvas={canvas} submitted={submitted} />
    </div>
  );
}

export default MainScreen;