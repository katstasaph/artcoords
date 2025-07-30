// the map

import { useState, useEffect } from 'react'
//import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Map = (props) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    generateMapUrl();  
  }, [props.coords]);

  const generateMapUrl = () => {
	let url = "https://www.google.com/maps/search/?api=1&query=" + props.coords
    setUrl(url);
  }	
  
  return (
      <>
      <a href={url} target="_blank">(View map)</a>
	  </>
    );
}

export default Map;