import React, { Component } from 'react';
import './css/App.css';
import {Nav} from './nav';
import {City} from './city';
import {CityDetail} from './Page/CityDetail';
import {Link} from 'react-router';


class App extends Component {
  render() {
    return (

      <div>
      <Nav />
      <div className="App">
      <City />
      </div>
      </div>

    );
  }
}

export default App;
