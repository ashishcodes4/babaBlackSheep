









import React from'react';
import './Pagenavigation.css';
const Pagenavigation = ({ onRouteChange }) => {
	return (
		<div className='page-navigation'>
			<div className='text-banner banner-menu'>
<<<<<<< HEAD
				<p href='menu' onClick={()=>onRouteChange('menu')} >menu</p>
			</div>
			<div className='text-banner banner-about'>
				<p href='about' onClick={()=>onRouteChange('about')}>story</p>
			</div>
			<div className='text-banner banner-gallery'>
				<p href='gallery' onClick={()=>onRouteChange('gallery')}>gallery</p>
=======
				<a onClick={()=> onRouteChange('menu')} >menu</a>
			</div>
			<div className='text-banner banner-about'>
				<a onClick={()=> onRouteChange('about')}>story</a>
			</div>
			<div className='text-banner banner-gallery'>
				<a onClick={()=> onRouteChange('gallery')}>gallery</a>
>>>>>>> b581927f408e209e3fa34a4bc2b4dc7e4c87c4a9
			</div>
		</div>
		);
}

export default Pagenavigation;