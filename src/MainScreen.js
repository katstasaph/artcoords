// TODO:
// Randomize the orientation of the grid so it is not always weighted to one end
// Fix the async!!
// Fix the issue with the background resizing
// choose seed/database?
// Height by width order, not width by height -- reverse what you have
// Add slideshow feature and other pics to gallery pane
// Style selected about/gallery pane 
// "Boroughs" singular
// Fix the paint names to what klay said
// Klay wants me to widen the time input fields for some reason
// Fix the title and the auto-preview desc
// Sunrise/sunset

// Parent component for child elements

import { useState, useEffect } from 'react'
import Settings from './Settings';
import About from './About';
import Output from './Output';

const Header = () => {
  return (
    <div className="header">
	    <h3>art coordinates</h3>
	    <p>a generator of algorithmic field painting coordinates and constraints</p>
	</div>
  );
}

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
    <Header /> 
    <About /> 
      <div class="maincontainer">
      <div className="leftpanel">
        <Settings boroughs={boroughs} time={time} paint={paint} canvas={canvas} submitFormData={submitFormData} />
	  </div>
	  <div className="rightpanel">
	    <Output chosenBoroughs={boroughs} time={time} paint={paint} canvas={canvas} submitted={submitted} />
      </div>
	</div>
	</>
  );
}

export default MainScreen;