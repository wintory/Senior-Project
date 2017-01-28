import React, { Component } from 'react';
import './css/nav.css';
import './bootstrap.css';
import {logo} from './logo.png';


export class Nav extends Component {

  render(){
    return(
      <nav class="navbar navbar-light bg-faded">
      <a class="navbar-brand" href="#">
      <img src="{logo}"></img>
          <input type="text"></input>
            <input type="submit"></input>
            </a>
            </nav>
    );
  }
}
