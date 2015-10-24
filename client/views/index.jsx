import React from 'react';
import Actions from '../actions/actions';
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
    const {layout, items} = this.state;
    const thumbnailWidth = layout.get('width') / layout.get('thumbnailsPerRow');

    // cut-off switch for browser size
    if (layout.get('height') < 300 || layout.get('width') < 400) {
      return (<h4>Too Small</h4>);
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <ThumbnailSet width={thumbnailWidth} children={items} />
          </div>
        </div>
      </div>
    );
  }
});

