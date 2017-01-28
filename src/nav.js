import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/nav.css';
import './css/bootstrap.css'


export class Nav extends Component {

  render(){
    return(
      <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">
        <img src={logo}></img>
          <input type="text"></input>
            <input type="submit"></input>
            </a>
            </nav>
    );
  }
}
