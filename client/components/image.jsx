import React, {PropTypes} from 'react';
import Actions from '../actions/actions';
import ImageLoader from 'react-imageloader';

module.exports = React.createClass({

  propTypes: {
    id: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    loaded: PropTypes.bool
  },
  onEnter: function(){
    Actions.updateHover(this.props.id);
  },
  onLeave: function(){
    Actions.updateHover(false);
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
    return (<div></div>);
  }
});
