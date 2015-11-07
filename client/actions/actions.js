import alt from 'dispatcher';
import $ from 'jquery';
import _ from 'lodash';

/* 
  Actions: Recieves events from components and dispatches them
    to the Store.
  */

class Actions {

  constructor(){
    // debounce handlers to prevent jitteriness
    this.updateHover = _.debounce(this.updateHover, 10);
    this.updateWindowSize = _.debounce(this.updateWindowSize, 100);
    this.updateWheel = _.debounce(this.updateWheel, 100);
  }

  updateHover(hoverId) {
    this.dispatch(hoverId);
  }

  updateWindowSize() {
    this.dispatch({
      height: $(window).height(),
      width: $(window).width()
    });
  }

  updateWheel(event) {
    this.dispatch(event);
  }

  imageLoaded(id) {
    this.dispatch(id);
  }

  changeLocation(path){
    this.dispatch(path);
  }

}

module.exports = alt.createActions(Actions);
