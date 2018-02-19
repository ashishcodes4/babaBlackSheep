


 





import React from 'react';
import './Navigation.css';

const Naviagtion = () => {
	return(
		<div className='navbar'>
			
				<a className='logo' href='google.com'>
					<img alt='logo'src='http://www.cafedulce.co/content/themes/feelgood2016/img/cd-logo-lg-trans--inv.png' />
				</a>
				<a className='navbar-item'>home</a>
				<a className='navbar-item'>about</a>
				<a className='navbar-item'>menu</a>
				<a className='navbar-item'>gallery</a>
				<a className='navbar-item'>contact</a>
				<a className='navbar-item'>updates</a>
		</div>
		);
}

export default Naviagtion;