import React, { Component } from 'react';
import './css/App.css';

import {Todo} from './Todo';
import {Nav} from './nav';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Choose Your City</h1>
        <div className="container">
                  <div className="card clearfix">
                    <Link to="/*">
                      <div className="tab-page" name="bangkok">Bangkok</div>
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


      </div>
    );
  }
}

export default App;
