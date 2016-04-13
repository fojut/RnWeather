/**
 * Created by fojut on 2016/4/7.
 */
import React, {AppRegistry} from 'react-native'
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore'
/**
 * ### Router-Flux
 *
 * Necessary components from Router-Flux
 */
import RNRF, {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import Launch from './containers/Launch'
import Home from './containers/Home'
import Settings from './containers/Settings'
import TabIcon from './components/TabIcon'
import BackIcon from './components/BackIcon'

import { themeInitialState } from './reducers/themeReducer'
import { cityInitialState } from './reducers/cityReducer'
import { weatherInitialState } from './reducers/weatherReducer'

export default (platform) => {

    let RnWeather = React.createClass({
        render(){
            console.log('Device OS: ' + platform);
            if(platform !== 'android'){
                console.log('Only support Android OS!');
                return;
            }

            const initialState = {
                themeReducer: themeInitialState,
                cityReducer: cityInitialState,
                weatherReducer: weatherInitialState,
            };

            const store = configureStore(initialState);

            //将dispatch和state注入到RNRF.Router
            const Router = connect()(RNRF.Router);


            return(
                <Provider store={store}>
                    <Router>
                        <Scene key="modal" component={Modal}>
                            <Scene key="root" hideNavBar={true}>
                                <Scene key="launch" component={Launch} title="开始" initial={true} />

                                <Scene key="bottom" tabs={true} default="home">
                                    <Scene key="home" title="主页" icon={TabIcon} component={Home} initial={true} hideNavBar={true} />
                                    <Scene key="settings" title="设置" icon={TabIcon} component={Settings} hideNavBar={true}/>
                                </Scene>
                            </Scene>
                        </Scene>
                    </Router>
                </Provider>
            );
        }
    });

    AppRegistry.registerComponent('RnWeather', () => RnWeather);
}