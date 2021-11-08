import React from "react";
import {View,Text, StyleSheet ,TouchableOpacity, Touchable, TouchableNativeFeedback, Platform } from 'react-native';

const MainButton = props => {

    let ButtonComponent=TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.4} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text> 
            </View>
        </ButtonComponent>
        </View>
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

    },
    buttonContainer:{
        borderRadius:12,
        overflow:'hidden',
        //any child component sınırları geçemeyecek
    }
});

export default MainButton;