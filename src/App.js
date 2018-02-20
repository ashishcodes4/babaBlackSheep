










import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Bigpicture from './Components/BodyMidSec/Bigpicture.js'
import Pagenavigation from './Components/BodyMidSec/Pagenavigation.js';
import Footer from './Components/Footer/Footer.js'
import Menu from './Components/BodyMidSec/Menu/Menu.js'
import About from './Components/BodyMidSec/About/About.js'
import Gallery from './Components/BodyMidSec/Gallery/Gallery.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Gallery />
        <About />
        <Menu />
        <Bigpicture />
        <Pagenavigation />
        <Footer />
      </div>
    );
  }
}

export default App;
