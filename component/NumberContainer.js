import React from "react";
import {View, Text, StyleSheet} from 'react-native';
// import colors from "../constants/colors";

//bu component main component ile birlikte çalışmadı.
// bir bug oldu çözemedim bende tüm stilleri start game screen ve game screen  componentinin içine aktardım.
// hatasız çalışıyor ama uygulama çalışırken her defasında kaydetmen gerekiyor

const NumberContainer = props => {

    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {props.children}
            </Text>
        </View>
    );

};

styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor: 'black',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        width:65
    },
    number:{
        color: 'black',
        fontSize:30
    }
});

export default NumberContainer;