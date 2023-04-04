// chosen paints

import { useState, useEffect } from 'react'
import parse from 'html-react-parser';

const Canvas = (props) => {
  const [length, setLength] = useState();
  const [height, setHeight] = useState();
  const [lengthStops, setLengthStops] = useState([]);
  const [heightStops, setHeightStops] = useState([]);
  const [display, setDisplay] = useState('');

  const chooseCanvasSize = () => {
    const sizes = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 60]
    let chosenLength = sizes[Math.floor(Math.random() * sizes.length)];
    let chosenHeight = sizes[Math.floor(Math.random() * sizes.length)];
    return [chosenLength, chosenHeight];
  }
  
  const chooseColor = () => {
    let hex = "#";
    const hexes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
      for (let i = 0; i < 6; i++) {
	    let hex_char = hexes[Math.floor(Math.random() * hexes.length)];
	  hex += hex_char;
      }	
   return hex;
  }

  const setStops = (max) => {
    let stops = [];
    let lowerBound = Math.floor(Math.random() * (max - 3)) + 1;
    while (max > lowerBound) {
      let stop = 1 + Math.floor(Math.random() * (max - lowerBound));
      max -= stop;
      stops.push(max);
    }
   return stops;
  }  

  const displayStops = (dimensions, chosenLengthStops, chosenHeightStops) => {
    const scalar = 8;
    let html = "<svg class='canvas' width='" + (dimensions[0] * scalar) + "' height='" + (dimensions[1] * scalar) + "' version='1.1' xmlns='http://www.w3.org/2000/svg'>";
    let lengthEndpoint = 0;
    let heightEndpoint = 0;
    chosenLengthStops.reverse().push(dimensions[0]);
    chosenHeightStops.reverse().push(dimensions[1]);
    chosenLengthStops.forEach((stop, index) => {
    let color = chooseColor();
    let scaledHeight = (stop*scalar) - lengthEndpoint;
    let heightEndpoint = 0;
    chosenHeightStops.forEach((heightStop, heightIdx) => {
   	  let height = (heightStop*scalar) - heightEndpoint;
	  html += "<rect x=" + lengthEndpoint + " y=" + heightEndpoint;
	  html +=	" width=" + scaledHeight + " height=" + height +" fill='" + color + "' />";
	  heightEndpoint = (heightStop*scalar);
	  color = chooseColor();
      });
    lengthEndpoint = (stop*scalar);
   });
   return parse(html + "</svg>");
  }

  const setCanvas = () => {
	let dimensions = chooseCanvasSize();
	let chosenLengthStops = setStops(dimensions[0]);
	let chosenHeightStops = setStops(dimensions[1]);
	setLength(dimensions[0]);
	setHeight(dimensions[1]);
	setLengthStops(chosenLengthStops);
	setHeightStops(chosenHeightStops);
	setDisplay(displayStops(dimensions, chosenLengthStops, chosenHeightStops));
  }

  useEffect(() => {
    setCanvas();
  }, [props.submitted]);

  return (
    <div>
	  <p>Canvas dimensions: {length} x {height} </p>
	  <p>Length stops: {lengthStops.join(", ")}</p>
	  <p>Height stops: {heightStops.join(", ")}</p>
	  <p>Canvas underpainting template:</p>
	    {display}
	</div>
  );  
}

export default Canvas;