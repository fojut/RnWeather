/**
 * Created by fojut on 2016/4/7.
 */
import React, {View, Text, StyleSheet, Component} from "react-native";

export default class  TabIcon extends Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? "blue" :"black"}}>{this.props.title}</Text>
        );
    }
}

