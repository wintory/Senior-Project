import React, { Component } from 'react';
import '../bootstrap.css'
import '../css/citydetail.css';
import {Card} from './Card';
import {logo} from './logo.png';

export default class CityDetail extends Component {


  render(){
    return(
        <div>
        <h2>Bangkok</h2>
       
       <div className="container">
                  <div className="card clearfix">
                    <Link to="/*">
                      <div className="tab-page" name="bangkok">  <img src="{logo}"/></div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Chiang Mai</div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Phuket</div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Songkhla</div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Krabi</div>
                    </Link>
                    <Link to="/*">
                      <div className="tab-page">Udon Thani</div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Ubon Ratchathani</div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Chiang Rai</div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Surat Thani</div>
                    </Link>
                    <Link to="/*">
                      <div className="second tab-page">Khonkaen</div>
                    </Link>
                    <div className="citydetail">
                  {this.props.children}
                  </div>
            </div>
        </div>
 
    );
  }
}
