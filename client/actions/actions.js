import alt from 'dispatcher';
import $ from 'jquery';
import _ from 'lodash';

class Actions {

  updateHover(hoverId) {
    this.dispatch(hoverId);
  }
  updateWindowSize() {
    var self = this;
    _.defer(function(){
      self.dispatch({
        height: $(window).height(),
        width: $(window).width()
      });
    }, 100);
  }
  updateWheel(event) {
    this.dispatch(event);
  }

}

module.exports = alt.createActions(Actions);
