









import React from'react';
import './Pagenavigation.css';
const Pagenavigation = ({ onRouteChange }) => {
	return (
		<div className='page-navigation'>
			<div className='text-banner banner-menu'>
				<a onClick={()=> onRouteChange('menu')} >menu</a>
			</div>
			<div className='text-banner banner-about'>
				<a onClick={()=> onRouteChange('about')}>story</a>
			</div>
			<div className='text-banner banner-gallery'>
				<a onClick={()=> onRouteChange('gallery')}>gallery</a>
			</div>
		</div>
		);
}

export default Pagenavigation;