// chosen paints

import { useState, useEffect } from 'react'

const Paint = (props) => {
  const [paintList, setPaintList] = useState([]);

  useEffect(() => {
    choosePaints();
  }, [props.submitted]);
 
  const choosePaints = () => {
	const paints = ["titanium white", "lemon yellow", "yellow ochre", "raw sienna", "indian red", "light red", "medium red", "alizarin crimson", "ultramarine blue", "cobalt blue",
	"viridian", "chrome green", "black"];
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
    <div>
	Paints chosen: {paintList}
	</div>
  );  
}

export default Paint;