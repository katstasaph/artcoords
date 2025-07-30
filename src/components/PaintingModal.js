const PaintingModal = ({ handleClose }) => {
  
  const closeModal = (event) => {
    event.stopPropagation();
	handleClose();
  };

  return (
  <>
    <div className="modal" onClick={event => closeModal(event)} >
	  <div className="modalContainer">
  	    <h4>Algorithmic Field Painting #1</h4>
		<img src="./painting1.jpg" alt="Algorithmic Field Painting"/>
		<h4>Constraints:</h4>
		Some cool constraints
		<h4>Location</h4>
		<img src="./map1.png" alt="Algorithmic Field Painting 1 location" />
        <h4>Underpainting</h4>
		<img src="./canvas1.png" alt="Algorithmic Field Painting 1 underpainting" />
      </div>
    </div>
  </>
  );
}

export default PaintingModal;