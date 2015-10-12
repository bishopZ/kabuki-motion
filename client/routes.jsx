
import React from 'react/addons';
import { Route, NotFoundRoute, DefaultRoute } from 'react-router';

import Index from 'views/index';

module.exports = (
  <Route name="root" path="/" handler={require('./layout.jsx')}>
    <DefaultRoute name="index" handler={Index} />
    <Route name="healer" handler={require('./views/healer.jsx')} />
    <Route name="seer" handler={require('./views/seer.jsx')} />
    <Route name="melete" handler={require('./views/melete.jsx')} />
    <NotFoundRoute handler={require('./views/route-not-found.jsx')} />
  </Route>
);
