
var React = require('react/addons');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var NotFoundRoute = ReactRouter.NotFoundRoute;
var DefaultRoute = ReactRouter.DefaultRoute;

module.exports = (
  <Route name="root" path="/" handler={require('./components/navigation.jsx')}>
    <DefaultRoute name="index" handler={require('./components/index.jsx')} />
    <Route name="healer" handler={require('./components/healer.jsx')} />
    <Route name="seer" handler={require('./components/seer.jsx')} />
    <Route name="melete" handler={require('./components/melete.jsx')} />
    <NotFoundRoute handler={require('./components/route-not-found.jsx')} />
  </Route>
);

  //   <Route name="seer" handler={require('./components/seer.jsx')} />
  //   <Route name="melete" handler={require('./components/melete.jsx')} />

