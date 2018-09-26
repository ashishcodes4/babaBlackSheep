import React from 'react';
import './Navigation.css';

const Naviagtion = ({ onRouteChange }) => {
  return (
    <div className="navbar">
      <a className="logo" href="google.com">
        <img
          alt="logo"
          src="http://www.cafedulce.co/content/themes/feelgood2016/img/cd-logo-lg-trans--inv.png"
        />
      </a>
      <a className="navbar-item" onClick={() => onRouteChange('home')}>
        home
      </a>
      <a className="navbar-item" onClick={() => onRouteChange('about')}>
        about
      </a>
      <a className="navbar-item" onClick={() => onRouteChange('menu')}>
        menu
      </a>
      <a className="navbar-item" onClick={() => onRouteChange('gallery')}>
        gallery
      </a>
      <a className="navbar-item" onClick={() => onRouteChange('contacts')}>
        contact
      </a>
      <a className="navbar-item" onClick={() => onRouteChange('updates')}>
        updates
      </a>
    </div>
  );
};

export default Naviagtion;
