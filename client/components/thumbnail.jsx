
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Actions from '../actions/actions';
import _ from 'lodash';

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
    var style = _.extend(this.divStyle, this.props.style);
    return (
      <Link to={'/' + this.props.linkTo} className="navbar">
        <img 
          className="thumbnail" 
          src={this.props.src} 
          onMouseEnter={this.onEnter} 
          onMouseLeave={this.onLeave}
          style={style} />
      </Link>
    );
  },
  // default styles
  divStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    height: 0,
    width: 0,
    transition: 'all .2s ease-in-out'
  }
});
