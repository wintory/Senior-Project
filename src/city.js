import React, { Component } from 'react';
import './css/city.css';
import './css/bootstrap.css'
import {Link} from 'react-router';



export class City extends Component {

  render(){
    return(
      <div>
      <h3>Choose Your City</h3>
                   <Link to="/citydetail">
                     <div cityName="bangkok">Bangkok</div>
                   </Link>
                   <Link to="/citydetail">
                     <div cityName="chiangmai">Chiang Mai</div>
                   </Link>
      </div>

    );
  }
}
