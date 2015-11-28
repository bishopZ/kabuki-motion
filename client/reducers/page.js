import _ from 'underscore';
import * as Actions from '../Actions';
import PageList from '../models/pageList';

var currentPage = {};

// a helper to control function purity
// see https://egghead.io/lessons/javascript-redux-pure-and-impure-functions?series=getting-started-with-redux
const actionHelper = function(group, property, iterator, shouldExtend = false){
  var modifiedGroup = group;
  modifiedGroup[property] = _.map(group[property], iterator);
  if (shouldExtend) {
    return _.extend({}, modifiedGroup);
  }
  return modifiedGroup;
};

export default function page(state = {}, action = {}) {

  // uncomment this to see all broadcast events
  // console.log(action.type, arguments);

  switch (action.type) {

    // Actions that cause a re-render

    case Actions.ROUTE_CHANGE:
      var path = action.payload.location.pathname;
      currentPage = _.find(PageList, function(pageData){
        return (pageData.route === path);
      });
      if (currentPage) { return _.extend({}, currentPage); }
      return PageList.NotFound;

    case Actions.IMAGE_LOADED:
      return actionHelper(currentPage, 'items', function(item, index){
        if (index === action.index) {
          item.loaded = true;
        }
        return item;
      }, true);
    
    case Actions.IMAGE_HOVER:
      return actionHelper(currentPage, 'items', function(item, index){
        if (index === action.index) {
          item.hover = action.hover;
        } else {
          item.hover = false;
        }
        return item;
      }, true);
    
    // Actions that do not cause a re-render

    case Actions.UPDATE_ANIMATE_PROPERTIES:
      return actionHelper(currentPage, 'items', function(item, index){
        if (index === action.item) {
          item.animates = _.extend({}, item.animates, action.animates);
        }
        return item;
      }, false);

    case Actions.ADD_ANIMATING_PROPERTIES: 
      return actionHelper(currentPage, 'items', function(item){
        item.animates = _.extend({}, action.props, item.animates);
        return item;
      }, false);

    case Actions.ADD_ITEM_PROPERTIES:
      return actionHelper(currentPage, 'items', function(item){
        return _.extend({}, action.props, item);
      }, false);

    default:
      return state;
  }

}
