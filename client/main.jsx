import React from 'react/addons';
import $ from 'jquery';

import Router from 'react-router';
import Routes from './routes.jsx';

import 'styles/main.scss';

/**
 * Main entry-point
 */
$(function() {

  // for developer tools
  window.React = React;

  React.initializeTouchEvents(true);

  // services initialization
  // var Services = require('./services');
  //     Services.initialize(window.EX.const.apiAccessToken);

  // store initialization -- needs to be done before any component references
  // var Stores = require('./stores');
  // Stores.initialize();

  // // for debugging - allows you to query the stores from the browser console
  // window._stores = Stores;

  var router = Router.create({
    routes: Routes,
    location: Router.HistoryLocation,
    onError: function() {
      // alert('unexpected error in Router');
    }
  });

  router.run(function(Handler) {
    React.render(<Handler width={50} />, document.body);
  });

});
