import { useState } from 'react'

const Settings = (props) => {
  const [boroughs, setBoroughs] = useState(props.boroughs);
  const [time, setTime] = useState(props.time);	
  const [paint, setPaint] = useState(props.paint);	
  const [canvas, setCanvas] = useState(props.canvas);	
	
  const handleBoroughChange = (event) => {
	let newBoroughs = {...boroughs};
	let checkedBorough = event.target.name;
	newBoroughs[checkedBorough] = event.target.checked;
    setBoroughs(newBoroughs);
  };
  
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
				<div className="textbox">
		Earliest start (use military time): &nbsp;
		<label>
			<input
			  name = "start"
			  value = {time.start}
			  type = "text"
			  maxLength = "5"
			  size = "1"
			  onChange={handleTimeChange}
			/> &nbsp;
		</label>
		<label>
			Latest start (use military time): &nbsp;
			<input
			  name = "end"
			  value = {time.end}
			  type = "text"
			  maxLength = "5"
			  size = "1"
			  onChange={handleTimeChange}
			/>
		</label>
		</div>
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