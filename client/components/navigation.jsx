// bootstrap initialization
// var $ = require('jquery');
// window.jQuery = $;
// require('bootstrap');

import React from 'react/addons';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

// var NavBar = require('./nav-bar.jsx'),
//     OverlayManager = require('./overlays/overlay-manager.jsx');

module.exports = React.createClass({

  // mixins: [Router.State],

  render: function() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
});
    // <NavBar />
    //
    // <OverlayManager />
