import React from 'react';
import logo from './logo.png';
import Tilt from 'react-tilt';
import './Logo.css';




const Logo = () => {
	return (
		<div className='ma5 mt0' >
			<Tilt 
				className='Tilt br2 shadow-3'
				style={{height: 150, width: 150}} >
				<div className='Tilt-inner pa3' >
					<img 
						style={{paddingTop: '5 px'}}
						alt='logo'
						src={logo} 
					/>
				</div>
			</Tilt>
		</div>
	);
}


export default Logo;