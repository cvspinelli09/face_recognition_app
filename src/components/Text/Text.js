import React from 'react';
import './Text.css';



const Text = () => {
	return (
		<div className='text' >
			<p className='f1' >
				{'Face Detection'}
			</p>
			<p className='f4' >
				{'The ‘Face Detection’ model returns probability scores on the likelihood that the image contains human faces and coordinate locations of where those faces appear with a bounding box.'}
			</p>
		</div>
	)
}


export default Text;

