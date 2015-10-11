
import React from 'react/addons';
import { Route, NotFoundRoute, DefaultRoute } from 'react-router';

import Index from 'components/index';

module.exports = (
  <Route name="root" path="/" handler={require('./components/navigation.jsx')}>
    <DefaultRoute name="index" handler={Index} />
    <Route name="healer" handler={require('./components/healer.jsx')} />
    <Route name="seer" handler={require('./components/seer.jsx')} />
    <Route name="melete" handler={require('./components/melete.jsx')} />
    <NotFoundRoute handler={require('./components/route-not-found.jsx')} />
  </Route>
);
