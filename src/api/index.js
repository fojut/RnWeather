import ApiClient from './ApiClient';
import config from '../config/config';

import WeatherAPI from './WeatherAPI';

function prepareApi() {
    const apiClient = new ApiClient({prefix: config.baseUrl});
    return {
        weather: new WeatherAPI({apiClient: apiClient})
    }
}

const api = prepareApi();
export default api;