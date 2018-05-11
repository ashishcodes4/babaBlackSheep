import React from'react';
import './Pagenavigation.css';
const Pagenavigation = ({ onRouteChange }) => {
	return (
		<div className='page-navigation'>
			<div className='text-banner banner-menu'>
				<p href='menu' onClick={()=>onRouteChange('menu')} >menu</p>
			</div>
			<div className='text-banner banner-about'>
				<p href='about' onClick={()=>onRouteChange('about')}>story</p>
			</div>
			<div className='text-banner banner-gallery'>
				<p href='gallery' onClick={()=>onRouteChange('gallery')}>gallery</p>
			</div>
		</div>
		);
}

export default Pagenavigation;