import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import CityDetail from './Page/CityDetail';


ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="citydetail" component={CityDetail}/>
      <Route path="*" component={CityDetail}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
