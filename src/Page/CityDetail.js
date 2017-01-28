import React, { Component } from 'react';
import '../bootstrap.css'
import '../css/App.css';

import {Todo} from '../Todo';
import '../css/citydetail.css';
import {Card} from './Card';
import {logo} from './logo.png';
import {Link} from 'react-router';

export default class CityDetail extends Component {


  render(){
    return(
        <div>
        <h2>Bangkok</h2>
        {this.props.children}
       <div className="container">
                  <div className="card clearfix activity second city-card">
                    <Link to="/ActivityDetail">
                      <div className="tab-page" name="bangkok"> <img src="{logo}"/>
                      <div>
                        <h2>Activity1</h2>
                      </div>
                      </div>
                    </Link>
                  </div>
                  <div className="card clearfix activity second city-card">
                    <Link to="/ActivityDetail">
                      <div className="second tab-page" name="bangkok"> <img src="{logo}"/>
                          <div>
                        <h2>Activity2</h2>
                      </div>
                      </div>
                    </Link>
                  </div>
                  <div className="card clearfix activity second city-card">
                    <Link to="/ActivityDetail">
                      <div className="second tab-page" name="bangkok"> <img src="{logo}"/>
                        <div>
                        <h2>Activity3</h2>
                      </div>
                      </div>
                    </Link>
                  </div>

        </div>
      </div>
    );
  }
}
