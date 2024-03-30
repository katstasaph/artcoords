import { useState, useEffect } from 'react';

import CoordOutput from './CoordOutput';
import Map from './Map';
import Time from './Time';
import Paint from './Paint';
import Canvas from './Canvas';
import SaveForm from './Save';

import Boroughs from './boroughs.geojson';
import * as turf from '@turf/turf';

const Output = (props) => {
  const [time, setTime] = useState(props.time);
  const [coords, setCoords] = useState();
  const [paint, setPaint] = useState(props.paint);
  const [canvas, setCanvas] = useState(props.canvas);

  const fetchCoords = async (chosenBoroughs) => {
    await fetch(Boroughs)
	  .then((response) => response.json())
      .then((responseJson) => {
	  let boroughs = [];
	  turf.featureEach(responseJson, function (currentFeature, featureIndex) {
				 if (chosenBoroughs.includes(currentFeature.properties.boro_name)) { boroughs.push(currentFeature); }
				});	
      let chosenBorough = boroughs[Math.floor(Math.random() * boroughs.length)];	
	  let bounds = turf.bbox(chosenBorough);
	  let pendingPoint = true;
	  let point;
	  while (pendingPoint) {
	    point = turf.randomPosition(bounds)
		  if (turf.booleanPointInPolygon(point, chosenBorough)) { pendingPoint = false; } 
	  }
      setCoords(point);
	  })
          .catch((error) =>{
            console.error(error);
    	});
  }	
	
  useEffect(() => {
	let chosenBoroughs = Object.keys(props.chosenBoroughs).filter(key => props.chosenBoroughs[key]);
	if (chosenBoroughs.length) { 
	  fetchCoords(chosenBoroughs); 
	}
	setTime(props.time);
	setPaint(props.paint);
	setCanvas(props.canvas);
  }, [props.submitted]);
  
  let coordDisplay = '';
  let mapDisplay = '';
  let timeDisplay = '';
  if (Object.keys(props.chosenBoroughs).filter(key => props.chosenBoroughs[key]).length) {
    coordDisplay = <CoordOutput coords={coords} />
	mapDisplay = <Map coords={coords} />
  }
  
  if (time.start !== '' && time.end !== '') {
    timeDisplay = <Time time={time} submitted={props.submitted} />; 
  }	  
  
  let paintDisplay = "";
  if (paint) {
    paintDisplay = <Paint paint={paint} submitted={props.submitted} />;
  }	

  let canvasDisplay = "";
  if (canvas) {
    canvasDisplay = <Canvas canvas={canvas} submitted={props.submitted} />;
  }	
  
  return (
    <>
	<h3>Painting constraints</h3>
	{coordDisplay}
	{mapDisplay}
	{timeDisplay}
	{paintDisplay}
	{canvasDisplay}
    < />
  );
};

// 	<SaveForm coords={coords} />

export default Output;