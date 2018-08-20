/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  SET_COINS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  coinData: [],
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COINS:
      return { ...state, coinData: action.coinData };
    default:
      return state;
  }
}

export default appReducer;
