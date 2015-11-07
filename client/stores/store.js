import alt from 'dispatcher';
import Immutable from 'immutable';
import Actions from '../actions/actions';
import $ from 'jquery';
import pagesData from './pages';

/* 
  Data Store

  reads in data from pages.js.
  responds to Actions.
  */

class Store {

  constructor() {
    var self = this;

    // General Environment data
    self.environment = Immutable.fromJS({
      width: $(window).width(),
      height: $(window).height(),
      wheel: null
    });

    // import page data and add some default state variables
    self.pages = Immutable.fromJS(pagesData.pages).map((page)=>{
      switch (page.get('layout')) {
        case 'fullscreen':
          return page.merge({
            items: [{
              loaded: false
            }]
          });
        case 'grid':
          return page.merge({
            items: page.get('items').map((item)=>{
              return item.merge({
                hover: false,
                loaded: false
              });
            })
          });
        default:
          return page;
      }
    });

    // Event Bindings
    self.bindListeners({
      handleImageLoad: Actions.IMAGE_LOADED,
      handleHover: Actions.UPDATE_HOVER,
      handleResize: Actions.UPDATE_WINDOW_SIZE,
      handleWheel: Actions.UPDATE_WHEEL,
      resetState: Actions.CHANGE_LOCATION
    });
  }

  // Helpers
  // these are designed as the Store's internal helpers
  // this the _ in their name

  _getPageByName(name) {
    return this.pages.filter(function(page){
      return page.get('name') === name;
    }).get(0);
  }

  _updatePage(pageId, newPageData){
    this.pages = this.pages.map(function(page){
      if (page.get('name') === pageId) {
        return page.merge(newPageData);
      }
      return page;
    });
  }

  // Event Handlers

  handleImageLoad(id) {
    var current = this._getPageByName(id.page);
    var updated = current.get('items');
    updated = updated.setIn([id.index, 'loaded'], true);
    current = current.set('items', updated);
    this._updatePage(id.page, current);
    this.emitChange();
  }

  handleHover(id) {
    var current = this._getPageByName(id.page);
    var updated = current.get('items');
    updated = updated.map((item)=>{
      return item.set('hover', false);
    });
    if (id.hover !== false){
      updated = updated.setIn([id.hover, 'hover'], true);
    }
    current = current.set('items', updated);
    this._updatePage(id.page, current);
    this.emitChange();
  }

  handleResize(newSize) {
    this.environment = this.environment.merge({
      width: newSize.width, 
      height: newSize.height
    });
  }

  handleWheel(event) {
    this.environment = this.environment.merge({
      wheel: event
    });
  }

  resetState() {
    // reset hover on index page
    var current = this._getPageByName('index');
    var updated = current.get('items');
    updated = updated.map((item)=>{
      return item.set('hover', false);
    });
    current = current.set('items', updated);
    this._updatePage('index', current);
    this.emitChange();
  }

}

module.exports = alt.createStore(Store, 'Store');
