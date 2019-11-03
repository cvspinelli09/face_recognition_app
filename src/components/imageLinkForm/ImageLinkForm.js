import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onInputChange, onButtomSubmit }) => {
	return (
		<div>
			<div className='form center br3'>
				<div className='center pa4 br3 shadow-5'>
					<input 
						className='input f4 pa2 center'
						type='text'
						onChange={onInputChange}
					/>
					<button 
						className='button w-30 f4 grow link ph3 pv2 dib black'
						onClick={onButtomSubmit}
					>Detect</button>
				</div>
			</div>
		</div>
	);	
}


export default ImageLinkForm;
