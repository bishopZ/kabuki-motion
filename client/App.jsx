// React View Layer
import React from 'react';
import { render } from 'react-dom';

// Router to manage browser history
import { ReduxRouter } from 'redux-router';
import { Route } from 'react-router';

// Redux Data Layer
import { Provider } from 'react-redux';
import Store from './Store';

// ViewConnector: Connect the Actions
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './Actions';

// The ViewController
import StageManager from './StageManager';
import 'styles/main.scss';

// connect the Views to the database
function mapStateToProps(state) {
  return {
    page: state.page,
    environment: state.environment
  };
}

// connect the Actions to the database
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

// Create the ViewConnector
// passing in the ViewController
var MainView = connect(mapStateToProps, mapDispatchToProps)(StageManager);
var domTarget = document.getElementById('app');

// Kick off the application
render(
  <Provider store={Store()}>
    <ReduxRouter>
      <Route path="*" component={MainView} />
    </ReduxRouter>
  </Provider>,
  domTarget
);
