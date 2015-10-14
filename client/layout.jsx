import React from 'react/addons';
import {RouteHandler} from 'react-router';
import Actions from 'actions/actions';

module.exports = React.createClass({
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('wheel', this.handleWheel);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('wheel', this.handleWheel);
  },

  render: function() {
    return (<RouteHandler />);
  },

  handleResize: function(ev) {
    Actions.updateWindowSize(ev);
  },
  handleWheel: function(ev) {
    Actions.updateWheel(ev);
  }


});
