// chosen paints

import { useState, useEffect } from 'react'

const Paint = (props) => {
  const [paintList, setPaintList] = useState([]);

  useEffect(() => {
    choosePaints();
  }, [props.submitted]);
 
  const choosePaints = () => {
	const paints = ["titanium white", "cadmium yellow light", "cadmium yellow medium", "yellow ochre", "raw sienna", "mars red", "cadmium red light", "cadmium red medium", "alizarin crimson",
	"ultramarine blue", "cobalt blue", "viridian green", "chrome green", "ivory black"];
	let chosen = [];
	let chance = Math.floor((Math.random() * 66) + 1);
	let guaranteed = Math.floor(Math.random() * paints.length);
	for (let i = 0; i < paints.length; i++) {
	  if (i === guaranteed || Math.floor((Math.random() * 100) + 1) <= chance) {
	    chosen.push(paints[i]);
	  }
	}
	setPaintList(chosen.join(", "));
  }

  return (
  <>
	<br/><span><strong>Paints chosen:</strong> {paintList}</span>
  </>
  );  
}

export default Paint;