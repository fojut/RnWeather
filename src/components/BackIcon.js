/**
 * Created by fojut on 2016/4/12.
 */
import React, {View, Text, StyleSheet, Component, TouchableOpacity} from "react-native";
import { Icon } from 'react-native-material-design';
import { Actions } from "react-native-router-flux";

export default class BackIcon extends Component {
    render(){
        return (<TouchableOpacity style={[{
            width: 100,
            height: 37,
            position: 'absolute',
            bottom: 4,
            left: 2,
            padding: 8,
            justifyContent:'center',
            }]} onPress={Actions.pop}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Icon name="arrow-back"  size={25} style={{paddingRight:3}} />
                    <Text >返回</Text>
                </View>
            </TouchableOpacity>
        );
    }
}