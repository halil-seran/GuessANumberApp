import React from "react";
import {View , Text, StyleSheet } from 'react-native';
import TitleText from "./TitleText";

const Header = props => {
    return(
        <View style={styles.header} >
            <TitleText>{props.title}</TitleText>
        </View>
    );
};



const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: 80,
        paddingTop:40,
        backgroundColor:'thistle',
        alignItems:'center',
        justifyContent:'center',

    }
    
});

export default Header; 