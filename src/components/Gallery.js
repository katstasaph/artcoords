import { useState } from 'react';
import { createPortal } from 'react-dom';
import PaintingModal from './PaintingModal';

const ImageDisplay = () => {
  const [modalOpen, setModalOpen] = useState(false);	
  
  const closeModal = () => {
    setModalOpen(false)
  }
  
  return (
    <div>
	<p>
	  <img src="./painting1.jpg" width="33%" height="33%" alt="Algorithmic Field Painting" onClick={() => setModalOpen(true)} /> 
      {modalOpen && createPortal(
        <PaintingModal handleClose={closeModal} />,
        document.body
      )}
	</p>
	<p><em>Algorithmic Field Painting #1</em> (2021): 16 in. x 29 in. </p>
	</div>
  );
}

const Gallery = () => {
  return (
      <ImageDisplay />
  );
}

export default Gallery;