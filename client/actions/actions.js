import alt from 'dispatcher';
import $ from 'jquery';
import _ from 'lodash';

class Actions {

  updateHover(newData) {
    this.dispatch(newData);
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
    // console.log(event);
    this.dispatch(event);
  }

}

module.exports = alt.createActions(Actions);
