/**
 * Created by fojut on 2016/4/7.
 */
'use strict'
import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'
import cityReducer from './cityReducer'
import themeReducer from './themeReducer'

const rootReducer = combineReducers({
    weatherReducer,
    cityReducer,
    themeReducer
});

export default rootReducer;