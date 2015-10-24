import React, {PropTypes} from 'react';
import {Motion, spring} from 'react-motion';
import _ from 'underscore';
import Image from 'components/image';
import {Link} from 'react-router';

module.exports = React.createClass({

  propTypes: {
    id: PropTypes.number,
    src: PropTypes.string,
    linkTo: PropTypes.string,
    width: PropTypes.number,
    index: PropTypes.number,
    hover: PropTypes.bool,
    loaded: PropTypes.bool
  },

  render: function() {
    var {width, index, hover, linkTo, ...other} = this.props;

    var original = {
      height: width,
      width: width,
      top: 0,
      left: width * index,
      position: 'absolute',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      zIndex: 1
    };

    var destination = _.extend({}, original);

    if (hover) {
      destination = _.extend(destination, {
        top: Math.floor(original.top - (original.height * 0.1)),
        left: Math.floor(original.left - (original.width * 0.1)),
        height: Math.floor(original.height * 1.2),
        width: Math.floor(original.width * 1.2)
      });
    }
    
    var springDestination = _.mapObject(destination, function(value){
      if (typeof value === 'string') {
        return value;
      }
      return spring(value, [120, 17]);
    });

    var rendered = (
      <Image
        {...other}
        className="thumbnail"
        style={destination} >
        <div></div>
      </Image>
    );

    if (hover) {
      rendered = (
        <Motion defaultStyle={original} style={springDestination} >
        {
          function(styles) {
            styles.zIndex = 2;
            return (
              <div>
                <Image
                  {...other}
                  className="thumbnail"
                  style={styles} >
                  <div></div>
                </Image>
              </div>
            );
          }
        }
        </Motion>
      );
    } 

    return (
      <Link to={'/' + linkTo}>
        {rendered}        
      </Link>
    );
   
  }
});
