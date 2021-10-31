import React from "react";
import {Text , View , TextInput , StyleSheet , props} from 'react-native';

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    )
};

const styles = StyleSheet.create({
    input:{
        width:80,
        height:50,
        borderColor:'black',
        borderWidth:2,
        marginVertical:1,
        margin:5,
        
    }
});

export default Input;