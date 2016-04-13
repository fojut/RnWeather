/**
 * Created by fojut on 2016/4/7.
 */
'use strict';
import { bindActionCreators } from 'redux';
import React, {View, Text, TouchableOpacity, ScrollView, StyleSheet, Component} from "react-native";
import {Actions, Reducer} from "react-native-router-flux";
import { Card, Button, Subheader, Divider, RadioButtonGroup, Toolbar, COLOR, TYPO, PRIMARY_COLORS, THEME_NAME } from 'react-native-material-design';
import { connect } from 'react-redux';
import * as weatherActions from '../actions/weatherActions'
import * as cityActions from '../actions/cityActions'
/**
 * Immutable Map
 */
import {Map} from 'immutable';

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scene: {
        marginTop: 56
    }
});

/**
 * ## Redux boilerplate
 */
const actions = [
    weatherActions,
    cityActions
];

/**
 *  Save that state
 */
function mapStateToProps(state) {
    return {
        ...state
    };
};

/**
 * Bind all the functions from the ```actions``` and bind them with
 * ```dispatch```
 */
function mapDispatchToProps(dispatch) {
    const creators = Map()
        .merge(...actions)
        .filter(value => typeof value === 'function')
        .toObject();

    return {
        actions: bindActionCreators(creators, dispatch),
        dispatch
    };
}

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fetching: false,
            response: null,
            error: null,
            city: props.cityReducer.city
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            fetching: nextProps.weatherReducer.fetching,
            response: nextProps.weatherReducer.response,
            error: nextProps.weatherReducer.error,
            city: nextProps.cityReducer.city
        });
    }

    renderData() {
        const { error, response, fetching } = this.state;
        console.log("fetching state: " + fetching);
        if (fetching) {
            return (<Text>正在加载...</Text>);
        } else {
            if (error !== null) {
                return (<Text>出错：{error}</Text>);
            } else if(response !== null){
                return (<Text>结果：{JSON.stringify(response, null, 2)}</Text> );
            }else{
                return (<Text/> );
            }
        }
    }

    render(){
        const { theme, primary } = this.props.themeReducer;
        return(

            <View style={styles.container} >
                <Toolbar
                    title={this.state.city}
                    primary={primary}
                    icon='arrow-back'
                    onIconPress={Actions.pop}
                    actions={[{
                    icon: 'warning',
                    }]}
                    rightIconStyle={{
                    margin: 10
                }} />
                <ScrollView horizontal={false} style={styles.scene}>
                    <View>
                        <Subheader text="选择城市:" />
                        <RadioButtonGroup
                            selected={this.state.city}
                            onSelect={(value)=>{
                                console.log('选择了：'+value);
                                this.props.actions.selectCity(value);
                            }}
                            theme={theme}
                            primary={primary}
                            items={[{
                                value: 'suzhou', label: '苏州'
                            }, {
                                value: 'hangzhou', label: '杭州'
                            }, {
                                value: 'nanjing', label: '南京'
                            }, {
                                value: 'yangzhou', label: '扬州'
                            }]}
                        />
                        <Button text="加载天气" primary={primary} theme={theme}
                                onPress={()=>{this.props.actions.fetchCityWeather(this.state.city)}} raised={true}/>
                        <Divider />
                        <Text>{this.renderData()}</Text>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Home);