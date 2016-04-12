/**
 * Created by fojut on 2016/4/7.
 */
import React, { AppRegistry, Component, Navigator, DrawerLayoutAndroid, ScrollView, View, Text, Image } from 'react-native';
import { Card, Button, Toolbar, COLOR, TYPO } from 'react-native-material-design';
import {Actions} from "react-native-router-flux";

export default class Launch extends Component{

    static defaultProps = {
        theme: 'light',
        primary: 'googleBlue'
    };

    render(){
        const { theme, primary } = this.props;
        return(
            <View {...this.props}>
                <Toolbar
                    title='Welcome'
                    primary={primary}
                    icon='menu'
                    actions={[{
                    icon: 'warning',
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

