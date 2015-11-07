import React, {PropTypes} from 'react';
import {Motion, spring} from 'react-motion';
import Image from '../components/image';

var Fullscreen = React.createClass({
  
  propTypes: {
    page: PropTypes.object,
    environment: PropTypes.object
  },

  render: function() {
    var {page, environment} = this.props;
    var springs = { width: spring(environment.get('width')) };

    return (
      <Motion style={springs} >{ function(animated) {
        return ( 
          <Image 
            id={{
              page: page.get('name'),
              index: 0
            }}
            src={page.get('source')} 
            loaded={page.get('items').get(0).get('loaded')}
            className="fullscreenImage"
            style={{ 
              width: animated.width
            }} /> 
        );
      }}</Motion>
    );
  }
});

module.exports = Fullscreen;
