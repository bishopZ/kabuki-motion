import alt from 'dispatcher';
import {Map, List} from 'immutable';
import Actions from '../actions/actions';
import $ from 'jquery';
import _ from 'lodash';

class Store {

  constructor() {

    // Data
    this.layout = Map({
      width: $(window).width(),
      height: $(window).height(),
      thumbnailsPerRow: 5,
      wheel: null
    });

    var itemDefaults = {
      hover: false,
      loaded: false
    };

    this.items = List.of(
      Map(_.extend(itemDefaults, {
        src: 'images/healerThumb.jpg',
        linkTo: 'healer'
      })),
      Map(_.extend(itemDefaults, {
        src: 'images/seerThumb.jpg',
        linkTo: 'seer'
      })),
      Map(_.extend(itemDefaults, {
        src: 'images/meleteThumb.jpg',
        linkTo: 'melete'
      }))
    );

    // Event Bindings
    this.bindListeners({
      handleImageLoad: Actions.IMAGE_LOADED,
      handleHover: Actions.UPDATE_HOVER,
      handleResize: Actions.UPDATE_WINDOW_SIZE,
      handleWheel: Actions.UPDATE_WHEEL
    });
  }

  // Event Handlers
  handleImageLoad(id) {
    if (typeof id === 'number') {
      var item = this.items.get(id);
      this.items = this.items.set(id, item.set('loaded', true));
      this.emitChange();      
    }
  }

  handleHover(id) {
    this.items = this.items.map(function(item, index){      
      return item.set('hover', (index === id) ? true : false );
    });
    this.emitChange();
  }

  handleResize(newSize) {
    this.layout = this.layout.merge({
      width: newSize.width, 
      height: newSize.height
    });
  }

  handleWheel(event) {
    this.layout = this.layout.merge({
      wheel: event
    });
  }

}

module.exports = alt.createStore(Store, 'Store');
