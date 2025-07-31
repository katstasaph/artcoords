import { useState } from 'react';
import { createPortal } from 'react-dom';
import PaintingModal from './PaintingModal';
import paintingData from '../paintingData';

const Painting = ({ idx, setModalOpen }) => {
  const src = `./painting${idx+1}.jpg`;
  const alt = `Algorithmic Field Painting ${idx+1}`;
  return (
    <>
     <img src={src} width="33%" height="33%" alt={alt} onClick={() => setModalOpen(true)} /> 
	</>
  );
}

const ArrowButton = ({ dir, cycle }) => {
  const className = dir === "Previous" ? "lucide lucide-arrow-left-circle" : "lucide lucide-arrow-right-circle";
  const pathOne = dir === "Previous" ? "M16 12H8" : "M8 12h8";
  const pathTwo = dir === "Previous" ? "m12 8-4 4 4 4" : "m12 16 4-4-4-4";
  return (
    <div aria-label={dir} onClick={cycle}>
      <svg
	    xmlns="http://www.w3.org/2000/svg" 
	    width="24" 
	    height="24" 
	    viewBox="0 0 24 24" 
	    fill="none" 
	    stroke="currentColor" 
	    strokeWidth="2" 
	    strokeLinecap="round" 
	    strokeLinejoin="round" 
	    className={className}
	  >
	    <circle cx="12" cy="12" r="10"/>
	    <path d={pathOne}/>
	    <path d={pathTwo}/>;
	  </svg>
	</div>
  )
}

const ImageDisplay = () => {
  const [currentPaintingId, setCurrentPaintingId] = useState(0);
  
  const [modalOpen, setModalOpen] = useState(false);	
  
  const closeModal = () => {
    setModalOpen(false)
  }
  
  const cyclePreviousPainting = () => {
    const newId = currentPaintingId === 0 ? paintingData.length - 1 : currentPaintingId - 1;
    setCurrentPaintingId(newId);
  }
  
  const cycleNextPainting = () => {
    const newId = currentPaintingId === paintingData.length - 1 ? 0 : currentPaintingId + 1;
    console.log(newId);
	setCurrentPaintingId(newId);
  }
  
  return (
    <>
    <div>
	  <div className="gallery">
	    <ArrowButton dir="Previous" cycle={cyclePreviousPainting} />
          <Painting idx={currentPaintingId} setModalOpen={setModalOpen} />
	    <ArrowButton dir="Next" cycle={cycleNextPainting} />
     </div>	
	{modalOpen && createPortal(
      <PaintingModal constraints={paintingData[currentPaintingId]} handleClose={closeModal} />,
      document.body
    )}
	<p><em>Algorithmic Field Painting #{currentPaintingId + 1}</em>, {paintingData[currentPaintingId].year}, oil on canvas</p>
	</div>
	</>
  );
}

const Gallery = () => {
  return (
      <ImageDisplay />
  );
}

export default Gallery;