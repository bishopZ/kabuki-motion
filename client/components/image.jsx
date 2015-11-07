import React, {PropTypes} from 'react';
import Actions from '../actions/actions';
import ImageLoader from 'react-imageloader';

/* 
  Component: Renders an image with a preloader.
  */

module.exports = React.createClass({

  propTypes: {
    id: React.PropTypes.shape({
      page: PropTypes.string,
      index: PropTypes.number
    }),
    src: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    loaded: PropTypes.bool
  },
  onEnter: function(){
    Actions.updateHover({
      hover: this.props.id.index, 
      page: this.props.id.page
    });
  },
  onLeave: function(){
    Actions.updateHover({
      hover: false, 
      page: this.props.id.page
    });
  },
  onLoaded: function(){
    Actions.imageLoaded(this.props.id);
  },
  
  render: function() {
    if (this.props.loaded) {
      return this.wrapper('loaded', <img src={this.props.src} />);
    }
    return (
      <ImageLoader
        src={this.props.src}
        wrapper={this.wrapper}
        preloader={this.preloader}
        onLoad={this.onLoaded} />
    );
  },
  wrapper: function(classNames, children){
    return (
      <div
        {...this.props}
        classNames={classNames}
        onMouseEnter={this.onEnter} 
        onMouseLeave={this.onLeave}
      >
        {children}
      </div>
    );
  },
  preloader: function(){
    return (<h4>Loading</h4>);
  }
});
