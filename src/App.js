import React, { Component } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import logo from './logo.png';
import logo1 from './logo1.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       
        <div className="container">
          <div className="App-header">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2"> 
                <img src={logo} className="App-logo" alt=" " />
              </div>
          </div>
          
          <div className="App-header1">
              <div className="col-xs-6">
              <center><img src={logo1} className="App-logo1" alt=" " /></center>
              </div>
          </div> 
      </div>
      <Footer />
    </div>
    );
  }
}

export default App;
