









import React from'react';
import './Pagenavigation.css';
const Pagenavigation = () => {
	return (
		<div className='page-navigation'>
			<div className='text-banner banner-menu'>
				<a href='#' >menu</a>
			</div>
			<div className='text-banner banner-about'>
				<a href='#' >story</a>
			</div>
			<div className='text-banner banner-gallery'>
				<a href='#' >gallery</a>
			</div>
		</div>
		);
}

export default Pagenavigation;