import alt from 'dispatcher';
import Immutable from 'immutable';
import Actions from '../actions/actions';
import $ from 'jquery';

class Store {

  constructor() {
    this.layout = Immutable.Map({
      width: $(window).width(),
      height: $(window).height(),
      thumbnailsPerRow: 5,
      wheel: null,
      hover: false
    });
    this.bindListeners({
      handleHover: Actions.UPDATE_HOVER,
      handleResize: Actions.UPDATE_WINDOW_SIZE,
      handleWheel: Actions.UPDATE_WHEEL
    });
  }

  handleHover(hoverKey) {
    this.layout = this.layout.set('hoverKey', hoverKey);
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
