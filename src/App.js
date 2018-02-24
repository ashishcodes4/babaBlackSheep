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
	constructor(){
		super()
		this.state ={
			route:'home'
		}
	}

	onRouteChange = (route) => {
		this.setState({route:route});
	}

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        {
        	this.state.route === 'home' ?
        	<div>
        		<Bigpicture />
        		<Pagenavigation onRouteChange={this.onRouteChange} />
        	</div>
        	: null
        }
        {
        	this.state.route === 'menu' ?
        	<div>
        		<Menu />
                <Pagenavigation onRouteChange={this.onRouteChange} />
        	</div>
        	: null
        }
        {
        	this.state.route === 'gallery' ?
        	<div>
        		<Gallery />
                <Pagenavigation onRouteChange={this.onRouteChange} />
        	</div>
        	: null
        }
        {
        	this.state.route === 'about' ?
        	<div>
        		<About />
                <Pagenavigation onRouteChange={this.onRouteChange} />
        	</div>
        	: null
        }
        {
            this.state.route === 'contact' ?
            <div>
                <Pagenavigation onRouteChange={this.onRouteChange} />
            </div>
            : null 
        }
        {
            this.state.route === 'updates' ?
            <div>
                <Pagenavigation onRouteChange={this.onRouteChange} />
            </div>
            :null 
        }
        <Footer />
      </div>
    );
  }
}

export default App;



// if (this.state.route === 'home') {
        	// 	<div>
        	// 		<Bigpicture />
        	// 		<Pagenavigation />
        	// 	</div>
        	// } 
        	// else if (this.state.route === 'gallery') { 
        	// 	<div>
        	// 		<Gallery />
        	// 	</div>
        	// }
        	// else if (this.state.route === 'about') {
        	// 	<div>
        	// 		<About />
        	// 	</div>
        	// }
        	// else if (this.state.route === 'Menu') {
        	// 	<div>
        	// 		<Menu />
        	// 	</div>
        	// }
        	