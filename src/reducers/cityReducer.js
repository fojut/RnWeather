/**
 * Created by fojut on 2016/4/12.
 */
import { SELECT_CITY } from '../actions/cityActions'

export default function cityReducer(state={}, action){
    switch (action.type){
        case SELECT_CITY:
            return { ...state, city: action.city }
        default:
            return state;
    }
}