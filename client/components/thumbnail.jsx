
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Actions from '../actions/actions';

module.exports = React.createClass({
  propTypes: {
    key: PropTypes.number,
    id: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
    linkTo: PropTypes.string
  },
  onEnter: function(){
    Actions.updateHover(this.props.id);
  },
  onLeave: function(){
    Actions.updateHover(false);
  },
  render: function() {
    
    return (
      <Link to={'/' + this.props.linkTo} className="navbar">
        <img 
          className="thumbnail" 
          src={this.props.src} 
          onMouseEnter={this.onEnter} 
          onMouseLeave={this.onLeave}
          style={this.props.style} />
      </Link>
    );
  }
});
