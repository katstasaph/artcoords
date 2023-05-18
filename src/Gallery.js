import { useState } from 'react';

const ImageDisplay = () => {
	
  return (
    <div>
	<p><img src="./painting1.jpg" width="33%" height="33%" /> <img src="./canvas1.png" height="33%" width="33%" /> &nbsp; &nbsp; <img src="./map1.png" width="27%" height="27%" /></p>
	<p> <em>Algorithmic Field Painting #1</em> (2021): 16 in. x 29 in. </p>
	</div>
  );
}

const Gallery = () => {
  return (
      <ImageDisplay />
  );
}

export default Gallery;