import React from 'react';
import Store from './stores/store';
import Actions from './actions/actions';
import { Lifecycle } from 'react-router';
import NotFound from './layouts/route-not-found';
import Grid from './layouts/grid.jsx';
import Fullscreen from './layouts/fullscreen.jsx';

module.exports = React.createClass({

  mixins: [ Lifecycle ],

  // keep component state in synch with store's state
  getInitialState: function() {
    return Store.getState();
  },
  componentDidMount: function() {
    Store.listen(this.onChange);
    window.addEventListener('resize', Actions.updateWindowSize);
    window.addEventListener('wheel', Actions.updateWheel);
  },
  componentWillUnmount: function() {
    Store.unlisten(this.onChange);
    window.removeEventListener('resize', Actions.updateWindowSize);
    window.removeEventListener('wheel', Actions.updateWheel);
  },

  // re-render when the store changes
  onChange: function(state) {
    this.setState(state);
  },

  render: function() {
    const {environment} = this.state;
    const page = this.findPage();

    // default Not Found route
    if (page.size < 1) {
      return <NotFound />;
    }

    // cut-off switch for browser size
    if (environment.get('height') < 300 || environment.get('width') < 400) {
      return (<h4>Too Small</h4>);
    }

    switch (page.get('layout')) {
      case 'grid':
        return <Grid page={page} environment={environment} />;
      case 'fullscreen':
        return <Fullscreen page={page} environment={environment} />;      
      default:
        return <NotFound />;
    }

  },

  // Get the page data for this page
  findPage: function(){
    const {pages} = this.state;
    var page = pages.find(function(pageData){
      return pageData.get('route') === window.location.pathname;
    });
    return page;
  },

  // comes from the react-router/Lifecycle mixin
  // detects when a new route has been selected
  routerWillLeave(nextLocation) {
    Actions.changeLocation(nextLocation.pathname);
    // return false to cancel navigation
    return true;
  }

});
