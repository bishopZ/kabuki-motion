import alt from 'dispatcher';
import Immutable from 'immutable';
import Actions from '../actions/actions';
import $ from 'jquery';

class Store {
  constructor() {

    this.pageData = Immutable.Map({
      width: $(window).width(),
      thumbnailsPerRow: 5
    });

    this.bindListeners({
      handleUpdate: Actions.UPDATE_STORE
    });
  }

  handleUpdate(newData) {
    if (newData.hover === true) {
      this.pageData = this.pageData.set('width', $(window).width()+100);
      this.emitChange();
    } else {
      this.pageData = this.pageData.set('width', $(window).width());
      this.emitChange();
    }
  }
}

module.exports = alt.createStore(Store, 'Store');
