import Actions from '../actions/actions';
import React from 'react';
import Store from '../stores/store';
import ThumbnailSet from 'components/thumbnailSet';
import _ from 'lodash';

// Main Controller-View

module.exports = React.createClass({
  getInitialState: function() {
    return Store.getState();
  },
  componentDidMount: function() {
    Store.listen(this.onChange);
    window.addEventListener('resize', Actions.updateWindowSize);
    window.addEventListener('wheel', Actions.updateWheel);
  },
  componentWillUnmount: function() {
    Store.unlisten(this.onChange);
    window.removeEventListener('resize', Actions.updateWindowSize);
    window.removeEventListener('wheel', Actions.updateWheel);
  },
  onChange: function(state) {
    this.setState(state);
  },

  render: function() {
    const layout = this.state.layout;
    const thumbnailWidth = layout.get('width') / layout.get('thumbnailsPerRow');

    // reset hover
    this.items = _.map(this.items, function(item){ item.hover = false; return item; });

    // set current hover item
    var hoverKey = layout.get('hoverKey');
    if (hoverKey !== false && this.items[hoverKey]) {
      this.items[hoverKey].hover = true;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ThumbnailSet width={thumbnailWidth} children={this.items} />
          </div>
        </div>
      </div>
    );
  },

  items: [
    {
      src: 'images/healerThumb.jpg',
      linkTo: 'healer',
      hover: false
    },
    {
      src: 'images/seerThumb.jpg',
      linkTo: 'seer',
      hover: false
    },
    {
      src: 'images/meleteThumb.jpg',
      linkTo: 'melete',
      hover: false
    }
  ]
});

