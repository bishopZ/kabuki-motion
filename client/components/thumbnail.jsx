import React, {PropTypes} from 'react';
import {Motion, spring} from 'react-motion';
import _ from 'underscore';
import Image from 'components/image';
import {Link} from 'react-router';

module.exports = React.createClass({

  propTypes: {
    key: PropTypes.number,
    id: PropTypes.number,
    src: PropTypes.string,
    linkTo: PropTypes.string,
    width: PropTypes.number,
    index: PropTypes.number,
    hover: PropTypes.bool
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
      WebkitUserSelect: 'none'
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

    return (
      <Link to={'/' + linkTo}>
        <Motion style={springDestination} >
        {
          function(styles) {
            if (hover) {
              styles.zIndex = 2;
            } else {
              styles.zIndex = 1;
            }
            return (
              <Image
                {...other}
                className="thumbnail"
                style={styles} />
            );
          }
        }
        </Motion>
      </Link>
    );
    
  }
});
