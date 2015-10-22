import React from 'react/addons';
import {RouteHandler} from 'react-router';
import Actions from 'actions/actions';

module.exports = React.createClass({
  componentDidMount: function() {
    window.addEventListener('resize', Actions.updateWindowSize);
    window.addEventListener('wheel', Actions.updateWheel);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', Actions.updateWindowSize);
    window.removeEventListener('wheel', Actions.updateWheel);
  },

  render: function() {
    return (<RouteHandler />);
  }
  
});
