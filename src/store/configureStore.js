/**
 * # configureStore.js
 * 
 * A Redux boilerplate setup
 * 
 */
'use strict';

/**
 * ## Imports
 * 
 * redux functions
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

/**
* ## Reducer
* The reducer contains the 4 reducers from 
* device, global, auth, profile
*/
import rootReducer from '../reducers/rootReducer';

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */ 
const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
)(createStore);

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 * 
 */ 
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
};
