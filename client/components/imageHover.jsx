import React, { PropTypes } from 'react';
import _ from 'underscore';

/* 
  Component: Renders a Loading Image
  */

export function applyHover(item){
  var offset = item.width * 0.2;
  return _.extend({}, item, {
    height: item.height + offset,
    width: item.width + offset,
    x: item.x - (offset / 2),
    y: item.y - (offset / 2),
    z: 20 
  });
}

export default function ImageHoverDisplay(Component){
  return React.createClass({

    propTypes: {
      addItemProperties: PropTypes.func.isRequired,
      imageHover: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired
    },
    
    componentWillMount: function(){
      this.props.addItemProperties(this.properties);
    },

    onClick: function(){
      this.props.imageHover(this.props.id, false);
    },
    onEnter: function(){
      this.props.imageHover(this.props.id, true);
    },
    onLeave: function(){
      this.props.imageHover(this.props.id, false);
    },

    render: function(){
      return (
        <div
          onMouseEnter={this.onEnter} 
          onMouseLeave={this.onLeave}
          onClick={this.onClick}
        >
          <Component {...this.props} />
        </div>
      );
    },

    properties: {
      hover: false
    }

  });
}
