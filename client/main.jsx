import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Router, { Route } from 'react-router';
import 'styles/main.scss';

// Main entry-point 
$(function() {

  const Index = require('./views/index.jsx');

  var history = createBrowserHistory();

  ReactDOM.render(
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="healer" component={require('./views/healer.jsx')} />
      <Route path="seer" component={require('./views/seer.jsx')} />
      <Route path="melete" component={require('./views/melete.jsx')} />
      <Route path="*" component={require('./views/route-not-found.jsx')} />
    </Router>
    , $('#app')[0]
  );

});         
