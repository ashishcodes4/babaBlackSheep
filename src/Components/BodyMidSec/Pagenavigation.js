









import React from'react';
import './Pagenavigation.css';
const Pagenavigation = ({ onRouteChange }) => {
	return (
		<div className='page-navigation'>
			<div className='text-banner banner-menu'>
				<a href='menu' onClick={()=> onRouteChange('menu')} >menu</a>
			</div>
			<div className='text-banner banner-about'>
				<a href='story' onClick={()=> onRouteChange('about')}>story</a>
			</div>
			<div className='text-banner banner-gallery'>
<<<<<<< HEAD
				<a href='gallery' onClick={()=> onRouteChange('gallery')}>gallery</a>
=======
				<a href='#' onClick={()=>onRouteChange('gallery')}>gallery</a>
>>>>>>> 9b7f2aa1344755c73ce02cce6de06261e82e6f87
			</div>
		</div>
		);
}

export default Pagenavigation;