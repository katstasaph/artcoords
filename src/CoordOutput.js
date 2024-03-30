import { useState, useEffect } from 'react'

const CoordOutput = (props) => {	
	
  const parseCoordinates = (point) => {
	if (point) {
	  return point.reverse().join(", ");
    }
	return "";
  }

  const [chosenCoord, setChosenCoord] = useState();		
  
  useEffect(() => { 
    setChosenCoord(parseCoordinates(props.coords));
  }, [props.coords]);
  	
  return (
    <div className="coords">
      <p><strong>Coordinates:</strong> {chosenCoord}</p>
    </div>
  );
}

export default CoordOutput;