import React from 'react';
import Image from 'components/image';
import Store from '../stores/store';
import Actions from '../actions/actions';

// Main Controller View

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
    const {layout} = this.state;
    
    // cut-off switch for browser size
    if (layout.get('height') < 300 || layout.get('width') < 400) {
      return (<h4>Too Small</h4>);
    }

    var styles = {
      width: layout.get('width')
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <Image 
              src="images/seerPage.jpg" 
              style={styles}
            />
          </div>
        </div>
      </div>
    );
  }
});
