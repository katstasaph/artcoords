// chosen paints

import { useState, useEffect, useCallback } from 'react'

const Swatch = ({ hex }) => {
  return (
    <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <rect
      x="10"
      y="10"
      width="16"
      height="16"
      stroke="black"
      fill={hex}
	  fillOpacity="1"
      strokeOpacity="1"
      strokeWidth="1" />
    </svg>
  );
}

const Paint = (props) => {
  const [paintList, setPaintList] = useState([]);

  const choosePaints = useCallback(() => {
    // todo: convert to css vars
    const paints = [
      { color: "titanium white", hex: "#F3F4F7" },
	  { color: "cadmium yellow light", hex: "#FDE55D" },
	  { color: "cadmium yelow medium", hex: "#FDDA0D" },
	  { color: "yellow ochre", hex: "#EDB525" },
	  { color: "raw sienna", hex: "#D27D46" },
	  { color: "mars red", hex: "#A1251B" },
	  { color: "cadmium red light", hex: "#E37877" },
	  { color: "cadmium red medium", hex: "#D22B2B" },
	  { color: "alizarin crimson", hex: "#E32636" },
	  { color: "ultramarine blue", hex: "#4166F5" },
	  { color: "cobalt blue", hex: "#0047AB" },
	  { color: "viridian green", hex: "#40826D" },
	  { color: "chrome green", hex: "#1AA260" },
	  { color: "ivory black", hex: "#0C0B0A" },
    ];
 	let chosen = [];
	let chance = Math.floor((Math.random() * 66) + 1);
	let guaranteed = Math.floor(Math.random() * paints.length);
	for (let i = 0; i < paints.length; i++) {
	  if (i === guaranteed || Math.floor((Math.random() * 100) + 1) <= chance) {
	    chosen.push(paints[i]);
	  }
	}
    setPaintList(chosen);
  }, []);

  useEffect(() => {
    choosePaints();
  }, [props.submitted, choosePaints]);

  return (
  <>
	<strong>Paints chosen:</strong>
	<ul>
	  {paintList?.map(paint => {
	    return (
	      <li className="paintList" id={paint.color}>
	        <Swatch hex={paint.hex}/>
	        <span className="swatchLabel">{paint.color}</span>
		  </li>
		);
	  })}
    </ul>
  </>
  );  
}

export default Paint;