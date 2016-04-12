/**
 * Created by fojut on 2016/4/7.
 */
'use strict'
import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'
import cityReducer from './cityReducer'

const rootReducer = combineReducers({
    weatherReducer,
    cityReducer
});

export default rootReducer;