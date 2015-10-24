import React, {PropTypes} from 'react';
import Thumbnail from 'components/thumbnail';

module.exports = React.createClass({
  propTypes: {
    width: PropTypes.number,
    children: PropTypes.object
  },
  render: function() {
    var {children, width} = this.props;
    return (
      <div className="thumbnailSet"> 
        {children.map((thumb, index) => {
          return (
            <Thumbnail
              id={index}
              key={index}
              index={index}
              width={width}
              src={thumb.get('src')}
              linkTo={thumb.get('linkTo')} 
              hover={thumb.get('hover')}
              loaded={thumb.get('loaded')} />
          );
        })}
      </div>
    );
  }
});
