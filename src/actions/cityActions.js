/**
 * Created by fojut on 2016/4/12.
 */
export const SELECT_CITY= 'SELECT_CITY';

export function selectCity(city){
    return {
        type: SELECT_CITY,
        city: city
    }
}