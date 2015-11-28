import { createStore, compose, combineReducers } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import { createHistory } from 'history';

// Our Data sources!!
import page from 'reducers/page';
import environment from 'reducers/environment';

// combine them together
const rootReducer = combineReducers({
  page,
  environment,
  router: routerStateReducer
});

// and compose them with the router data
export default function configureStore(initialState) {
  return compose(
    reduxReactRouter({ createHistory })
  )(createStore)(rootReducer, initialState);
}
