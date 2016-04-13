/**
 * Created by fojut on 2016/4/7.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { AppRegistry, Component, Navigator, DrawerLayoutAndroid, ScrollView, View, Text, Image } from 'react-native';
import { Card, Button, Toolbar, COLOR, TYPO } from 'react-native-material-design';
import {Actions} from "react-native-router-flux";
import * as themeActions from '../actions/themeActions'

/**
 * Immutable Map
 */
import {Map} from 'immutable';

/**
 * ## Redux boilerplate
 */
const actions = [
    themeActions
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

class Launch extends Component{

    componentWillReceiveProps(nextProps) {
        this.setState({
            theme: nextProps.theme,
            primary: nextProps.primary,
        });
    }

    changeTheme = (cTheme, cPrimary)=> {
        let theme = cTheme === 'light'? 'dark': 'light';
        let primary = cPrimary === 'googleBlue'? 'googleGreen': 'googleBlue';
        this.props.actions.selectTheme(theme, primary);
    }

    render(){
        const { theme, primary } = this.props.themeReducer;
        return(
            <View {...this.props}>
                <Toolbar
                    title='Welcome'
                    primary={primary}
                    icon='menu'
                    actions={[{
                        icon: 'invert-colors',
                        onPress: ()=>this.changeTheme(theme, primary)
                    }]}
                    rightIconStyle={{
                    margin: 10
                }} />
                <View style={styles.scene}>
                    <Card>
                        <Card.Media
                            image={<Image source={require('../images/welcome.jpg')} />}
                            overlay={true}>
                            <Text style={[TYPO.paperFontHeadline, COLOR.paperGrey50]}>Welcome</Text>
                            <Text style={[TYPO.paperSubhead, COLOR.paperGrey50]}>欢迎来到RnWeather的天气应用！</Text>
                        </Card.Media>
                        <Card.Body>
                            <Text>快来尝鲜吧！</Text>
                        </Card.Body>
                        <Card.Actions position="right">
                            <Button text="进入" onPress={Actions.bottom}/>
                        </Card.Actions>
                    </Card>
                </View>
            </View>
        );
    }
}

const styles = {
    scene: {
        marginTop: 56
    }
};

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Launch);
