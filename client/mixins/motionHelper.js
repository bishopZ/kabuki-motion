import {spring} from 'react-motion';
import _ from 'underscore';

/* 
  A helper to get React-Motion to render nested property lists. 
  */
  
module.exports = {

  prepareMotionProperties: function(items){
    // some fancy footwork to get react-motion to render nested property sets
    var propKeyMap = {};
    var animatedProperties = items.reduce(function(memo, child, index){
      _.each(child.get('animating'), function(value, name){
        var key = name + index;
        propKeyMap[key] = {index: index, name: name};
        memo[key] = value;
      });
      return memo;
    }, {});
    var springs = _.mapObject(animatedProperties, function(value){
      return spring(value, [101, 6]);
    });
    
    return {propKeyMap, springs};
  },

  extractMotionProperties: function(propKeyMap, animated){
    return _.reduce(animated, function(memo, value, key){
      var {index, name} = propKeyMap[key];
      memo[index] = memo[index] || {};
      memo[index][name] = value;
      return memo;
    }, {});
  }

};
