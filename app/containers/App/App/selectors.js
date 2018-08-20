/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { getFormValues } from 'redux-form';

const selectHighestState = state => state;
const selectGlobal = state => state.global;

const makeGlobalState = () =>
  createSelector(selectHighestState, highestState => highestState);

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.loading);

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

export {
  makeGlobalState,
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
};
