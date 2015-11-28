import React, { PropTypes } from 'react';
import Image from '../components/image';
import ImageLoader from '../components/imageLoader';
import ImageHover, { applyHover } from '../components/imageHover';
import _ from 'underscore';
import { Link } from 'react-router';
import { Motion, spring } from 'react-motion';

/* 
  Layout View: Renders a grid of thumbnails.
  */

var GridItem = ImageHover(ImageLoader(Image)); // more future-proof than a mixin

var Grid = React.createClass({

  propTypes: {
    addAnimatingProperties: PropTypes.func,
    updateAnimateProperties: PropTypes.func,
    environment: PropTypes.shape({
      width: PropTypes.number
    }),
    page: PropTypes.shape({
      items: PropTypes.array.isRequired
    })
  },

  componentWillMount: function(){
    this.props.addAnimatingProperties(this.animates);
  },

  componentWillReceiveProps: function(props){

    // update the position of everything
    const {page, environment} = props;
    const {items, layout} = page;
    const {width} = environment;

    _.each(items, function(item, index){
      var size = width / layout.columns;
      var updatedProperties = {
        height: size,
        width: size,
        x: (index % layout.columns) * size,
        y: Math.floor(index / layout.columns) * size,
        z: 1
      };
      if (item.hover === true) {
        updatedProperties = applyHover(updatedProperties);
      }
      props.updateAnimateProperties(index, updatedProperties);
    });

  },

  render: function() {
    const {page} = this.props;
    const {items} = page;
    const self = this;

    if (items.length < 1 || !items[0].hasOwnProperty('animates')){
      return (<div><h4>Loading...</h4></div>);
    }

    return (
      <div className="row">
          {_.map(items, function(item, index) {
              
            var springs = _.mapObject(item.animates, function(value){
              return spring(value);
            });
            
            return (
              <Motion key={index} style={springs}>{ function(animating){
                var style = {
                  height: animating.height,
                  width: animating.width,
                  left: animating.x,
                  top: animating.y,
                  zIndex: Math.floor(animating.z)
                };
                return (
                  <div className="column">
                    <Link to={item.link}>
                      <GridItem 
                        id={index}
                        item={item}
                        className="gridItem"
                        style={style}
                        {...self.props} />
                    </Link>
                  </div>
                );
              }}</Motion>
            );
          })}
      </div>
    );
  },

  animates: {
    x: 150,
    y: 200, 
    z: 1,
    height: 5,
    width: 5
  }

});

export default Grid;
