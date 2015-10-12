import alt from 'dispatcher';

class Actions {

  updateStore(newData) {
    this.dispatch(newData);
  }

}

module.exports = alt.createActions(Actions);
