import React from "react";
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return (
    <View style = {{...styles.card , ...props.style}} >
        {props.children}
    </View>
    );
    
};

const styles = StyleSheet.create({
    card:{
        shadowColor:'black',
        shadowOffset: {width:3 ,height:3},
        shadowRadius:8,
        shadowOpacity:0.26,
        elevation:5,
        backgroundColor:'white',
        padding:20,
        borderRadius:20
    }
});

export default Card;