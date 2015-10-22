
import React, {PropTypes} from 'react';
import Thumbnail from 'components/thumbnail';
import _ from 'lodash';

module.exports = React.createClass({
  propTypes: {
    width: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      linkTo: PropTypes.string,
      hover: PropTypes.bool
    }))
  },
  render: function() {
    const width = this.props.width;
    return (
      <div className="thumbnailSet"> 
        {_.map(this.props.items, (thumb, index) => {
          return (
            <Thumbnail 
              key={index} 
              id={index} 
              src={thumb.src}
              width={width}
              proportion={1}
              y={0}
              x={width * (index)}
              linkTo={thumb.linkTo}
              hover={thumb.hover} />
          );
        })}
      </div>
    );
  }
});
