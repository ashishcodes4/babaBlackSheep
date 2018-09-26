import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div>
      <div className="order-now">
        <p>
          Already know What you want ?
          <a className="orderNow" target="_blank" href="order">
            Order Online Now
          </a>
        </p>
      </div>
      <section className="pdfmenu">
        <p>Like things the old school way ? Suit your style:</p>
        <a className="pdfmenu-button" href="pdfbuttton">
          {' '}
          Food Menu [PDF]
        </a>
        <a className="pdfmenu-button" href="pdfbuttton">
          {' '}
          Drinks Menu [PDF]
        </a>
      </section>
    </div>
  );
};

export default Menu;
