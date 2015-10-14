
import React from 'react/addons';
import {PropTypes} from 'react/addons';
import {Link} from 'react-router';
import Actions from '../actions/actions';

module.exports = React.createClass({
  propTypes: {
    src: PropTypes.string,
    width: PropTypes.number,
    proportion: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    linkTo: PropTypes.string
  },
  onEnter: function(){
    Actions.updateHover(true);
  },
  onLeave: function(){
    Actions.updateHover(false);
  },
  render: function() {
    this.divStyle.top = this.props.y;
    this.divStyle.left = this.props.x;
    this.divStyle.height = this.props.width / this.props.proportion;
    this.divStyle.width = this.props.width;

    return (
      <Link to={this.props.linkTo} className="navbar">
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
