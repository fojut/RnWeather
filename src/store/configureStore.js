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
    thunkMiddleware
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
