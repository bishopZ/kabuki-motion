import React, {PropTypes} from 'react';
import MotionHelper from '../mixins/motionHelper';
import {Motion} from 'react-motion';
import {Link} from 'react-router';
import Image from '../components/image';

/* 
  Layout View: Renders a grid of thumbnails.
  */

var Grid = React.createClass({
  
  propTypes: {
    page: PropTypes.object,
    environment: PropTypes.object
  },

  render: function() {
    const {page, environment} = this.props;
    var items = this.gridLayout(page, environment);
    items = this.updateHoverStates(items);

    var {propKeyMap, springs} = MotionHelper.prepareMotionProperties(items);
    return (
      <Motion style={springs}>{ function(animated) {
        var mappedProperties = MotionHelper.extractMotionProperties(propKeyMap, animated);
        return (
          <div className="row">
            {items.map(function(item, index) {
              var animations = mappedProperties[index];
              return (
                <div key={index} className="column">
                  <Link to={item.get('link')}>
                    <Image 
                      id={{
                        page: page.get('name'),
                        index: index
                      }}
                      src={item.get('source')} 
                      loaded={item.get('loaded')}
                      className="gridImage"
                      style={{ 
                        top: animations.y,
                        left: animations.x,
                        height: animations.height,
                        width: animations.width,
                        position: 'absolute',
                        zIndex: Math.ceil(animations.z) // chrome only renders integers
                      }} />
                  </Link>
                </div>
              );
            })}
          </div> 
        );
      }}</Motion>
    );
  },

  gridLayout: function(page, environment){
    var numColumns = page.get('columns');
    var rowCount = 0;
    var itemWidth = environment.get('width') / numColumns;
    var items = page.get('items').map(function(item, index){
      var columnCount = index % numColumns;
      var newItem = item.set('animating', {
        y: itemWidth * rowCount,
        x: itemWidth * columnCount,
        height: itemWidth,
        width: itemWidth,
        z: 1
      });
      if (columnCount === numColumns - 1) { rowCount++; }
      return newItem;
    });
    return items;
  },

  updateHoverStates: function(items){
    return items.map((item)=>{
      if (item.get('hover') !== false){
        var positions = item.get('animating');
        var hoverProportion = 0.25;
        var hoverDistance = positions.width * hoverProportion;
        return item.set('animating', {
          y: positions.y - (hoverDistance / 2),
          x: positions.x - (hoverDistance / 2),
          height: positions.height + hoverDistance,
          width: positions.width + hoverDistance,
          z: 20
        });
      }
      return item;
    });
  }

});

module.exports = Grid;

