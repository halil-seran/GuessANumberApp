import React from "react";
import {View,Text, StyleSheet ,TouchableOpacity, Touchable } from 'react-native';

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );

};

styles = StyleSheet.create({
    button:{
        backgroundColor:'orange',
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:11
    },
    buttonText:{
        color:'black',
        fontFamily:'open-sans',
        fontSize:20

    }
});

export default MainButton;