import React from 'react/addons';
import $ from 'jquery';

import Router from 'react-router';
import Routes from './routes.jsx';
import Store from './stores/store';
import AltContainer from 'alt/AltContainer';

import 'styles/main.scss';

/**
 * Main entry-point
 */
$(function() {

  // for developer tools
  // window.React = React;

  // // for debugging - allows you to query the stores from the browser console
  // window._stores = Stores;

  React.initializeTouchEvents(true);

  // store initialization -- needs to be done before any component references

  var router = Router.create({
    routes: Routes,
    location: Router.HistoryLocation,
    onError: function() {
      // alert('unexpected error in Router');
    }
  });

  router.run(function(Handler) {
    React.render(
      <AltContainer store={Store}>
        <Handler />
      </AltContainer>
      , document.body
    );
  });

});
