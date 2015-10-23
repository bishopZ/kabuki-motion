import React, {PropTypes} from 'react';
import Thumbnail from 'components/thumbnail';
import _ from 'lodash';

module.exports = React.createClass({
  propTypes: {
    width: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      linkTo: PropTypes.string,
      hover: PropTypes.bool
    }))
  },
  render: function() {
    var {children, width} = this.props;
    return (
      <div className="thumbnailSet"> 
        {_.map(children, (thumb, index) => {

          return (
            <Thumbnail 
              key={index} // react wants this
              id={index} // we use this one
              index={index}
              width={width}
              src={thumb.src}
              linkTo={thumb.linkTo} 
              hover={thumb.hover} />
          );

        })}
      </div>
    );
  }
});
