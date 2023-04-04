// info

import { useState } from 'react';

const AboutText = () => {
  return (
    <div>
    <p>This tool was created for artist <a href="http://www.klayjamesenos.com">Klay-James Enos</a> for his Algorithmic Field Painting series. The tool generates a number of constraints to plan a plein air painting: the geographic location of the painting site, to the time of day to begin painting, the underlying grid and color structure of the painting base, and the paints to use on site.</p>
    <p>"Quantification has become a normalized fixture of life, and geotracking is carried out with our tacit consent. Randomness is only the departure point for the de-systemizing of creative choices that may eventually yield spontaneous emotion."</p>
    </div>
  );
}

const ImageDisplay = () => {
  return (
    <div>
	<p><img src="./painting1.jpg" width="33%" height="33%" /> <img src="./canvas1.png" height="33%" width="33%" /> &nbsp; &nbsp; <img src="./map1.png" width="27%" height="27%" /></p>
	<p> <em>Algorithmic Field Painting #1</em> (2021): 16 in. x 29 in. </p>
	</div>
  );
}

const About = () => {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [imageExpanded, setImageExpanded] = useState(false);

  const toggleAbout = () => {
    setAboutExpanded(!aboutExpanded);
    setImageExpanded(false);
  }
  
  const toggleImage = () => {
    setAboutExpanded(false);
    setImageExpanded(!imageExpanded);
  }
  
  let pane = '';
  if (aboutExpanded) {
    pane = <AboutText />;
  }
  else if (imageExpanded) {
    pane = <ImageDisplay />;
  }
  
  return (
    <div>
      <strong><span onClick={(e)=> toggleAbout(e)}>
      About</span>  &nbsp; &nbsp; &nbsp;  <span onClick={(e)=> toggleImage(e)}>
      Gallery</span></strong>
	  {pane}
    </div>);
}

export default About;