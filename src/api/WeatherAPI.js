/**
 * Created by fojut on 2016/4/7.
 */
import Base from './Base';

export default class WeatherAPI extends Base{

    get(city) {
        return this.apiClient.get(`heweather/weather/free`, {city: city});
    }
}