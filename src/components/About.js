// info

import { useState } from 'react';
import { createPortal } from 'react-dom';
import Gallery from './Gallery';
import Essay from './Essay';

const AboutText = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const closeModal = () => {
    setModalOpen(false)
  }  
  
  return (
    <div>
    <p>This tool was created for artist <a href="http://www.klayjamesenos.com">Klay-James Enos</a> for his Algorithmic Field Painting series. The tool generates a number of constraints to plan a plein air painting: the geographic location of the painting site, to the time of day to begin painting, the underlying grid and color structure of the painting base, and the paints to use on site.</p>
	<p onClick={() => setModalOpen(true)}><strong>Read more.</strong></p>
	{modalOpen && createPortal(
      <Essay handleClose={closeModal} />,
      document.body
    )}
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
    pane = <Gallery />;
  }
  
  return (
    <div className="header">
      <strong><span onClick={(e)=> toggleAbout(e)}>
      About</span>  &nbsp; &nbsp; &nbsp;  <span onClick={(e)=> toggleImage(e)}>
      Gallery</span></strong>
	  {pane}
    </div>);
}

export default About;