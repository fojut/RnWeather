/**
 * Created by fojut on 2016/4/12.
 */
import { SELECT_CITY } from '../actions/cityActions'

export const cityInitialState = {
    city: 'suzhou'
};

export default function cityReducer(state=cityInitialState, action){
    switch (action.type){
        case SELECT_CITY:
            return { ...state, city: action.city }
        default:
            return state;
    }
}