
import React from 'react/addons';
import {PropTypes} from 'react/addons';
import ThumbnailSet from 'components/thumbnailSet';
import $ from 'jquery';


module.exports = React.createClass({
  propTypes: {
    width: PropTypes.number
  },

  // Stateful
  getInitialState: function() {
    return {
      width: $(window).width(),
      thumbnailsPerRow: 5
    };
  },

  render: function() {
    const thumbnailWidth = this.state.width / this.state.thumbnailsPerRow;
    const items = [
      {
        src: 'images/healerThumb.jpg',
        linkTo: 'healer'
      },
      {
        src: 'images/seerThumb.jpg',
        linkTo: 'seer'
      },
      {
        src: 'images/meleteThumb.jpg',
        linkTo: 'melete'
      }
    ];

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ThumbnailSet width={thumbnailWidth} items={items} />
          </div>
        </div>
      </div>
    );
  }
});

