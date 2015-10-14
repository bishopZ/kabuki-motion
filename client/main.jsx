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

  React.initializeTouchEvents(true);

  var router = Router.create({
    routes: Routes,
    location: Router.HistoryLocation
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
