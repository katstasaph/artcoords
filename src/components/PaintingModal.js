const PaintingModal = ({ constraints, handleClose }) => {
  
  const closeModal = (event) => {
    event.stopPropagation();
	handleClose();
  };

  return (
    <>
    <div className="modal" onClick={event => closeModal(event)} >
	  <div className="modalContainer" onClick={event => event.stopPropagation() >
  	    <h4>Algorithmic Field Painting #{constraints.id}, {constraints.year}, oil on canvas</h4>
		<img src={`painting${constraints.id}.jpg`} alt="Algorithmic Field painting"/>
		<h4>Constraints:</h4>
		  <ul className="paintingModal">
		    <li className="paintingModal"><strong>Boroughs:</strong> {constraints.boroughs}</li>
		    <li className="paintingModal"><strong>Coordinates: </strong> {constraints.coordinates} </li>
		    <li className="paintingModal"><strong>Start time:</strong> {constraints.start} </li>
		    <li className="paintingModal"><strong>Paints for underpainting</strong>: {constraints.paints}</li>
		    <li className="paintingModal"><strong>Canvas dimensions:</strong> {constraints.dimensions}</li>
		    <li className="paintingModal"><strong>Width stops:</strong> {constraints.widths} </li>
		    <li className="paintingModal"><strong>Height stops:</strong> {constraints.heights} </li>
		  </ul>
		<h4>Location</h4>
		<img className="bordered" src={`map${constraints.id}.png`} alt="Algorithmic Field Painting location" />
        <h4>Underpainting</h4>
		<img src={`canvas${constraints.id}.png`} alt="Algorithmic Field Painting underpainting" />
      </div>
    </div>
  </>
  );
}

export default PaintingModal;