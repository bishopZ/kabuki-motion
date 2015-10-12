
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
    var divStyle = {
      height: this.props.width / this.props.proportion,
      width: this.props.width,
      position: 'absolute',
      top: this.props.y,
      left: this.props.x,
      zIndex: 1,
      transition: 'all .2s ease-in-out'
    };
    return (
      <Link to={this.props.linkTo} className="navbar">
        <img 
          className="thumbnail" 
          src={this.props.src} 
          style={divStyle}
          onMouseEnter={this.onEnter} 
          onMouseLeave={this.onLeave} />
      </Link>
    );
  }
});
