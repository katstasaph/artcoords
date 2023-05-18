import { useState, useEffect } from 'react'

const SaveForm = (props) => {
  const [newCoords, setNewCoords] = useState("");

  const [generations, setGenerations] = useState([{_id: "test", coords:"40"}]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
	async function fetchCoords() {
    fetch("http://localhost:4000/generations")
         .then(res => res.json())
		 .then(data => setGenerations(data));
	};
	fetchCoords();
	}, [saved]);

  useEffect(() => {
	let coordString = (props.coords) ? props.coords[0].toString() + ", " + props.coords[1].toString() : "";
    setNewCoords(coordString)
  }, [props.coords]);
  
  const storeCoords = async (event) => {
    event.preventDefault();
	console.log(newCoords);
	let entry = {coords: newCoords}
	console.log(entry);
    let result = await fetch(
        'http://localhost:4000/store', {
            method: "post",
            body: JSON.stringify(entry),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        if (result) {
	        setSaved(!saved);
            alert("Coords stored!");
        }
  };  
 
  let storeButton = ""
  if (props.coords) {
    storeButton = <form onSubmit={storeCoords}>
      <button className="styledbutton" type="submit" >
         Store current coordinates
      </button>
	</form>
  }  
  
  console.log(generations);

  return (
    <div>
    <hr />
	<p>Stored coordinates:</p>
	{generations.map(gen => (
                <div key={gen._id}>
                    <p>{gen.coords}</p>
                </div>
      ))}
	  {storeButton}
	</div>
  );  
}

export default SaveForm;