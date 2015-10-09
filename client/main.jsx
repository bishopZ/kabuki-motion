var $ = require('jquery');

/**
 * Main entry-point
 */
$(function() {

  var React = require('react/addons');
  var Router = require('react-router');

  // for developer tools
  window.React = React;

  // alert(1);

  // React.initializeTouchEvents(true);

  // services initialization
  // var Services = require('./services');
  //     Services.initialize(window.EX.const.apiAccessToken);

  // store initialization -- needs to be done before any component references
  // var Stores = require('./stores');
  // Stores.initialize();

  // // for debugging - allows you to query the stores from the browser console
  // window._stores = Stores;

  var Routes = require('./routes.jsx');

  var router = Router.create({
    routes: Routes,
    location: Router.HistoryLocation,
    onError: function() {
      // alert('unexpected error in Router');
    }
  });

  router.run(function(Handler) {
    React.render(<Handler/>, document.body);
  });

});
