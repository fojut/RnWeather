/**
 * Created by fojut on 2016/4/13.
 */
import { SELECT_THEME } from '../actions/themeActions'

const initialState = {
    theme: 'light',
    primary: 'googleBlue'
};

export default function themeReducer(state=initialState, action){
    switch (action.type){
        case SELECT_THEME:
            return { ...state, theme: action.theme, primary: action.primary }
        default:
            return state;
    }
}