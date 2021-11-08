import React from "react";
import {View , Text, StyleSheet, Platform } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import TitleText from "./TitleText";

const Header = props => {
    return(
        <View style={{...styles.headerBase, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}} >
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    );
};



const styles = StyleSheet.create({
    headerBase:{
        width:'100%',
        height: 80,
        paddingTop:40,
    //  backgroundColor: Platform.OS === 'ios' ? 'thistle' : 'white',
        backgroundColor:'thistle',
        alignItems:'center',
        justifyContent:'center',
    //    borderBottomColor:Platform.OS === 'ios' ? '#ccc' : 'black',
    //    borderBottomWidth:Platform.OS === 'ios' ? 2 : 1
    //hedef platform da stillendirme için yöntem 

    },
    headerIOS:{
        borderBottomColor:'#ccc',
        borderBottomWidth:2
    },
    headerAndroid:{
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    title:{
        color: Platform.OS === 'ios' ? 'black' : 'black'
    }
    
});

export default Header; 