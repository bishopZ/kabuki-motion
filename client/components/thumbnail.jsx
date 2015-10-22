
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Actions from '../actions/actions';

module.exports = React.createClass({
  propTypes: {
    key: PropTypes.number,
    id: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
    proportion: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    linkTo: PropTypes.string,
    hover: PropTypes.bool
  },
  onEnter: function(){
    Actions.updateHover(this.props.id);
  },
  onLeave: function(){
    Actions.updateHover(false);
  },
  render: function() {
    this.divStyle.top = this.props.y;
    this.divStyle.left = this.props.x;
    this.divStyle.height = this.props.width / this.props.proportion;
    this.divStyle.width = this.props.width;
    this.divStyle.zIndex = 1;

    if (this.props.hover) {
      this.divStyle.top -= this.divStyle.height * 0.1;
      this.divStyle.left -= this.divStyle.width * 0.1;
      this.divStyle.height *= 1.2;
      this.divStyle.width *= 1.2;
      this.divStyle.zIndex = 2;
    }

    return (
      <Link to={'/' + this.props.linkTo} className="navbar">
        <img 
          className="thumbnail" 
          src={this.props.src} 
          style={this.divStyle}
          onMouseEnter={this.onEnter} 
          onMouseLeave={this.onLeave} />
      </Link>
    );
  },
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
