import React, { PropTypes } from 'react';
import _ from 'underscore';
import $ from 'jquery';
import Layouts from 'models/layoutList';

var StageManager = React.createClass({

  propTypes: {
    updateWindowSize: PropTypes.func,
    updateWheel: PropTypes.func,
    environment: PropTypes.shape({
      titleSuffixe: PropTypes.string.isRequired
    }).isRequired,
    page: React.PropTypes.shape({
      name: React.PropTypes.string,
      route: React.PropTypes.string,
      layout: React.PropTypes.shape({
        type: React.PropTypes.string.isRequired
      })
    })
  },

  componentWillMount: function(){
    this.props.updateWindowSize();
  },
  componentDidMount: function() {
    window.addEventListener('resize', _.debounce(this.props.updateWindowSize, 100));
    window.addEventListener('wheel', _.debounce(this.props.updateWheel, 100));
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', _.debounce(this.props.updateWindowSize, 100));
    window.removeEventListener('wheel', _.debounce(this.props.updateWheel, 100));
  },

  render: function() {
    const {environment, page} = this.props;
    const Layout = Layouts[page.layout.type];

    $('title').text(page.name + environment.titleSuffixe);

    // cut-off switch for browser size
    if (environment.height < 300 || environment.width < 400) {
      return (<h4>Too Small</h4>);
    }

    return <Layout {...this.props} />;
  }
});

export default StageManager;
