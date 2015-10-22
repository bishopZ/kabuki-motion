import Actions from '../actions/actions';
import React from 'react';
import Store from '../stores/store';
import ThumbnailSet from 'components/thumbnailSet';

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
    const page = this.state.layout;
    const thumbnailWidth = page.get('width') / page.get('thumbnailsPerRow');
    let items = [
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
    ];
    var hover = page.get('hover');
    if (hover !== false) {
      items[hover].hover = true;
    }

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

