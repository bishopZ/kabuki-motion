import React, { PropTypes } from 'react';
import ImageLoader from 'react-imageloader';

/* 
  Component: Renders a Loading Image
  */

module.exports = function ImageLoaderDisplay(Component){
  return React.createClass({

    propTypes: {
      addItemProperties: PropTypes.func.isRequired,
      imageLoaded: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      item: PropTypes.shape({
        source: PropTypes.string.isRequired,
        loaded: PropTypes.bool
      })
    },
    
    componentWillMount: function(){
      this.props.addItemProperties(this.properties);
    },

    onLoaded: function(){
      this.props.imageLoaded(this.props.id);
    },
    
    render: function(){
      if (this.props.item.loaded === true) {
        return (<Component {...this.props} />);
      }
      return (
        <ImageLoader
          src={this.props.item.source}
          preloader={this.preloader}
          onLoad={this.onLoaded}
          {...this.props} />
      );
    },

    properties: {
      loaded: false
    },

    preloader: function(){
      return (<h4>Loading</h4>);
    }

  });
};
