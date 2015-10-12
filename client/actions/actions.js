import alt from 'dispatcher';

class Actions {

  updateHover(newData) {
    this.dispatch(newData);
  }
  updateWindowSize(newSize) {
  	this.dispatch(newSize);
  }
  updateWheel(event) {
  	this.dispatch(event);
  }

}

module.exports = alt.createActions(Actions);
