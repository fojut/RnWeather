/**
 * Created by fojut on 2016/4/11.
 */
'use strict';

import { FETCHING_CITY_WEATHER, FETCH_CITY_WEATHER_SUCCESS, FETCH_CITY_WEATHER_FAILURE } from '../actions/weatherActions';

export const weatherInitialState = {
    fetching: false,
    response: null,
    error: null
};

export default function weatherReducer(state=weatherInitialState, action){
    switch (action.type){
        case FETCHING_CITY_WEATHER:
            return { ...state, fetching: true }
        case FETCH_CITY_WEATHER_SUCCESS:
            return { ...state, fetching: false, response: action.payload.response }
        case FETCH_CITY_WEATHER_FAILURE:
            return  { ...state, fetching: false,  error: action.payload.error }
        default:
            return state;
    }
}