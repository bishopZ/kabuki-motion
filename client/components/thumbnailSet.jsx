
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
          var style = {
            height: this.props.width,
            width: this.props.width,
            top: 0,
            left: width * index,
            zIndex: 1
          };

          if (thumb.hover) {
            style.top -= style.height * 0.1;
            style.left -= style.width * 0.1;
            style.height *= 1.2;
            style.width *= 1.2;
            style.zIndex = 2;
          }
          return (
            <Thumbnail 
              key={index} 
              id={index} 
              src={thumb.src}
              linkTo={thumb.linkTo} 
              style={style} />
          );
        })}
      </div>
    );
  }
});
