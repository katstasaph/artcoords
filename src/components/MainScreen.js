// TODO:
// Tweak the generation of height/width stops so the grid is not always weighted to one end
// Improve timing of coord generator/add placeholder
// Fix the issue with the background resizing
// choose seed/database?
// Height by width order, not width by height -- reverse what you have
// Continue selected about/gallery pane 
// "Boroughs" singular
// Fix the title and the auto-preview desc
// Sunrise/sunset

import { useState, useEffect } from 'react'
import Settings from './Settings';
import Output from './Output';

const MainScreen = () => {
  const [submitted, setSubmitted] = useState(false);	
  const initBoroughs = {manhattan: false, queens: false, brooklyn: false, bronx: false, staten: false};	
  const [boroughs, setBoroughs] = useState(initBoroughs);
  const initTime = {start: '', end: ''}
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
    <>  
      <div className="leftpanel">
        <Settings boroughs={boroughs} time={time} paint={paint} canvas={canvas} submitFormData={submitFormData} />
	  </div>
	  <div className="rightpanel">
	    <Output chosenBoroughs={boroughs} time={time} paint={paint} canvas={canvas} submitted={submitted} />
      </div>
	</>
  );
}

export default MainScreen;