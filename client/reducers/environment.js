import _ from 'underscore';
import { UPDATE_WINDOW_SIZE, UPDATE_WHEEL } from '../Actions';

var currentState = {
  titleSuffixe: ' :: Venice Texas'
};

export default function environment(state = {}, action) {

  switch (action.type) {

    case UPDATE_WINDOW_SIZE:
      currentState.width = action.width;
      currentState.height = action.height;
      return _.extend({}, currentState);

    case UPDATE_WHEEL:
      currentState.wheel = action.wheel;
      return _.extend({}, currentState);

    default:
      return currentState;
  }

}
