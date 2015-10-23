import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Router, { Route } from 'react-router';
import 'styles/main.scss';

// Main entry-point 
$(function() {

  const Index = require('./views/index.jsx');
  const Healer = require('./views/healer.jsx');
  const Seer = require('./views/seer.jsx');
  const Melete = require('./views/melete.jsx');
  const NotFound = require('./views/route-not-found.jsx');

  var history = createBrowserHistory();

  ReactDOM.render(
    <Router history={history}>
      <Route path="/" component={Index} />
      <Route path="healer" component={Healer} />
      <Route path="seer" component={Seer} />
      <Route path="melete" component={Melete} />
      <Route path="*" component={NotFound} />
    </Router>
    , $('#app')[0]
  );

});         
