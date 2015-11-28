import React, { PropTypes } from 'react';

/* 
  Component: Renders an image 
  */

var Image = React.createClass({

  propTypes: {
    item: PropTypes.shape({
      source: PropTypes.string.isRequired
    }),
    style: PropTypes.object,
    className: PropTypes.string
  },
  
  render: function() {
    return (
      <img 
        className={this.props.className}
        src={this.props.item.source} 
        style={this.props.style} />
    );
  }

});

module.exports = Image;
