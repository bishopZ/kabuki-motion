
import React from 'react/addons';
import Store from '../stores/store';
import ThumbnailSet from 'components/thumbnailSet';

module.exports = React.createClass({
  getInitialState: function() {
    return Store.getState();
  },
  componentDidMount() {
    Store.listen(this.onChange);
  },
  componentWillUnmount() {
    Store.unlisten(this.onChange);
  },
  onChange(state) {
    this.setState(state);
  },

  render: function() {
    const page = this.state.layout;
    const thumbnailWidth = page.get('width') / page.get('thumbnailsPerRow');
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

