/**
 * Created by fojut on 2016/4/13.
 */
import { SELECT_THEME } from '../actions/themeActions'

export const themeInitialState = {
    theme: 'light',
    primary: 'googleBlue'
};

export default function themeReducer(state=themeInitialState, action){
    switch (action.type){
        case SELECT_THEME:
            return { ...state, theme: action.theme, primary: action.primary }
        default:
            return state;
    }
}