







import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Bigpicture from './Components/BodyMidSec/Bigpicture.js'
import Pagenavigation from './Components/BodyMidSec/Pagenavigation.js';
import Footer from './Components/Footer/Footer.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Bigpicture />
        <Pagenavigation />
        <Footer />
      </div>
    );
  }
}

export default App;
