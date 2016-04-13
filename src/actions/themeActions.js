/**
 * Created by fojut on 2016/4/13.
 */
export const SELECT_THEME= 'SELECT_THEME';

export function selectTheme(theme, primary){
    return {
        type: SELECT_THEME,
        theme: theme,
        primary: primary
    }
}