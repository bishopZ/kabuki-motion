import React, { PropTypes } from 'react';
import _ from 'underscore';
import Image from '../components/image';
import ImageLoader from '../components/imageLoader';
import { Motion, spring } from 'react-motion';

var MainItem = ImageLoader(Image);

var FullScreen = React.createClass({

  propTypes: {
    updateWindowSize: PropTypes.func.isRequired,
    page: PropTypes.shape({
      items: PropTypes.array.isRequired
    }),
    environment: PropTypes.shape({
      width: PropTypes.number
    })
  },
  
  componentWillMount: function(){
    this.props.updateWindowSize();
  },

  render: function() {
    const {page, environment} = this.props;
    const {items} = page;
    const self = this;

    var springs = _.mapObject({
        width: environment.width || 0
      }, function(value){
        return spring(value);
      }
    );

    return (
      <Motion style={springs}>{ function(animated){
        var style = _.extend({}, animated);
        return (
          <MainItem 
            id={0}
            item={items[0]}
            className="fullscreen"
            style={style}
            {...self.props} />
        );
      }}</Motion>
    );
  }

});

export default FullScreen;
