import { useState } from 'react'

const Settings = (props) => {
  const [boroughs, setBoroughs] = useState(props.boroughs);
  const [timeDisabled, setTimeDisabled] = useState(true);
  const [time, setTime] = useState(props.time);	
  const [paint, setPaint] = useState(props.paint);	
  const [canvas, setCanvas] = useState(props.canvas);	
	
  const handleBoroughChange = (event) => {
	let newBoroughs = {...boroughs};
	let checkedBorough = event.target.name;
	newBoroughs[checkedBorough] = event.target.checked;
    setBoroughs(newBoroughs);
  };
  
   const handleTimeToggle = (event) => {
    setTimeDisabled(!timeDisabled);	
	if (!timeDisabled) {
	  time.start = ''
	  time.end = ''
	}
	else {
	  time.start = '08:00'
      time.end = '16:00'	  
	}
  } 
  
  const handleTimeChange = (event) => {
    let newTime = {...time};
    let chosenTime = event.target.name;
    newTime[chosenTime] = event.target.value;
    setTime(newTime);	
  }

  const handlePaintChange = (event) => {
    setPaint(event.target.checked);	
  }
  
  const handleCanvasChange = (event) => {
    setCanvas(event.target.checked);	
  }
  
  const formSubmit = (event) => { 
    event.preventDefault();
    props.submitFormData({boroughs: boroughs, time: time, paint: paint, canvas: canvas});
  };
  
  return (
        <form onSubmit={formSubmit}>
        <div>
		<h3>Settings</h3>
		<h4>Location settings</h4>
        <p>Which boroughs would you like to include?</p>
        </div>
        <div className="radio">
          <label>
            <input
              name = "manhattan"
              type="checkbox"
              checked={boroughs.manhattan}
              onChange={handleBoroughChange}
            />
            Manhattan
          </label>
          <label>
            <input
              name = "queens"
              type="checkbox"
              checked={boroughs.queens}
              onChange={handleBoroughChange}
            />
            Queens
          </label>
          <label>
            <input
              name = "brooklyn"
              type="checkbox"
              checked={boroughs.brooklyn}
              onChange={handleBoroughChange}
            />
            Brooklyn
          </label>
          <label>
            <input
              name = "bronx"
              type="checkbox"
              checked={boroughs.bronx}
              onChange={handleBoroughChange}
            />
            Bronx
          </label>
          <label>
            <input
              name = "staten"
              type="checkbox"
              checked={boroughs.staten}
              onChange={handleBoroughChange}
            />
            Staten Island
          </label>
        </div>
		<h4>Time settings</h4>
		<div className="checkbox">
		<label>
			<input
			  name = "timetoggle"
			  type = "checkbox"
			  checked = {!timeDisabled}
			  onChange={handleTimeToggle}
			/>
			Set time constraints?
		</label>
		</div>		
		  <div className="textbox">
			{!timeDisabled && 
			<label for="start">Earliest start:</label>}
			{!timeDisabled && <input
			  id = "start"
			  name = "start"
			  disabled = {timeDisabled}
			  value = {time.start}
			  type = "time"
			  onChange={handleTimeChange}
			/>}
		</div>
		<div className="textbox">
			{!timeDisabled && 
			<label for="end">Latest start:</label>}
			{!timeDisabled && <input
			  id = "end"
			  name = "end"
			  disabled = {timeDisabled}
			  value = {time.end}
			  type = "time"
			  onChange={handleTimeChange}
			/>}
		</div>
		<h4>Canvas settings</h4>
		<div className="checkbox">
		<label>
			<input
			  name = "paints"
			  type = "checkbox"
			  checked={paint}
			  onChange={handlePaintChange}
			/>
			Restrict paint palette?
		</label>
		</div>
		<div className="checkbox">
		<label>
			<input
			  name = "canvas"
			  type = "checkbox"
			  checked={canvas}
			  onChange={handleCanvasChange}
			/>
			Create canvas grid?
		</label>
		</div>
        <button className="styledbutton" type="submit" >
          Generate
        </button>
      </form>
  );
}

export default Settings;