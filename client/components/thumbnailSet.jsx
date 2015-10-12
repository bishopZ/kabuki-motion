
import React from 'react/addons';
import {PropTypes} from 'react/addons';
import Thumbnail from 'components/thumbnail';
import _ from 'lodash';

module.exports = React.createClass({
  propTypes: {
    width: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      linkTo: PropTypes.number
    }))
  },
  render: function() {
    const width = this.props.width;
    return (
      <div className="thumbnailSet"> 
        {_.map(this.props.items, (thumb, index) => {
          return (
            <Thumbnail 
              id={index} 
              src={thumb.src}
              width={width}
              proportion={1}
              y={0}
              x={width * (index)}
              linkTo={thumb.linkTo} />
          );
        })}
      </div>
    );
  }
});
