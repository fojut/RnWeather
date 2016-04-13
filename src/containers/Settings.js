/**
 * Created by fojut on 2016/4/7.
 */
import React, {View, Text, StyleSheet, Component, IntentAndroid} from "react-native";
import {Actions} from "react-native-router-flux";
import { Card, Button, Toolbar, COLOR, TYPO } from 'react-native-material-design';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#FFFFFF",
    },
    scene: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 56
    }
});

export default class Settings extends Component{

    render(){
        const { theme, primary } = this.props;
        return(
            <View style={styles.container}>
                <Toolbar
                    title='查看天气'
                    primary={primary}
                    icon='arrow-back'
                    onIconPress={Actions.pop}
                    actions={[{
                    icon: 'warning',
                    }]}
                    rightIconStyle={{
                    margin: 10
                }} />
                <View style={styles.scene}>
                    <Button text="react-native-material-design"
                            onPress={() => IntentAndroid.openURL('https://github.com/react-native-material-design/react-native-material-design')}/>
                </View>
            </View>
        );
    }
}