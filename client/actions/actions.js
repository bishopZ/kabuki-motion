import alt from 'dispatcher';
import $ from 'jquery';
import _ from 'lodash';

class Actions {

  constructor(){
    // debounce handlers to prevent jitteriness
    this.updateHover = _.debounce(this.updateHover, 10);
    this.updateWindowSize = _.debounce(this.updateWindowSize, 100);
    this.updateWheel = _.debounce(this.updateWheel, 100);
  }

  imageLoaded(id) {
    var self = this;
    self.dispatch(id);
  }

  updateHover(hoverId) {
    var self = this;
    self.dispatch(hoverId);
  }

  updateWindowSize() {
    var self = this;
    self.dispatch({
      height: $(window).height(),
      width: $(window).width()
    });
  }

  updateWheel(event) {
    var self = this;
    self.dispatch(event);
  }

}

module.exports = alt.createActions(Actions);
