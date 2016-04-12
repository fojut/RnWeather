/**
 * Created by fojut on 2016/4/7.
 */

import {Actions} from 'react-native-router-flux';
import { parseJSON, checkHttpStatus, createConstants } from '../utils/Utils';
import api from '../api'

export const FETCHING_CITY_WEATHER = 'FETCHING_CITY_WEATHER';
export const FETCH_CITY_WEATHER_SUCCESS = 'FETCH_CITY_WEATHER_SUCCESS';
export const FETCH_CITY_WEATHER_FAILURE = 'FETCH_CITY_WEATHER_FAILURE';

export function fetchCityWeather(city){
    return dispatch => {
        dispatch(fetchingCityWeather());
        api.weather.get(city).then(response => {
            console.log('fetching success=>'+response);
            dispatch(fetchWeatherSuccess(response));
        }).catch(error => {
            console.warn('fetching error=>'+error);
            dispatch(fetchWeatherFailure(error));
        });
    }
}

function fetchingCityWeather(){
    return {
        type: FETCHING_CITY_WEATHER,
        payload: {
            fetching: true
        }
    }
}

function fetchWeatherSuccess(response){
    return {
        type: FETCH_CITY_WEATHER_SUCCESS,
        payload: {
            fetching: false,
            response: response
        }
    }
}

function fetchWeatherFailure(error){
    return {
        type: FETCH_CITY_WEATHER_FAILURE,
        payload: {
            fetching: false,
            error: error
        }
    }
}