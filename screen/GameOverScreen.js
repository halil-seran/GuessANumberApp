import React from "react";
import {Text, View, StyleSheet, Button , Image} from 'react-native';

import BodyText from "../component/BodyText";
import TitleText from "../component/TitleText";
import colors from "../constants/colors";
import MainButton from "../component/MainButton";

const GameOverScreen = props => {
    return(
    <View style={styles.screen}>
        <TitleText>OYUN BİTTİ!</TitleText>
        <View style={styles.imageContainer} >
          <Image 
              fadeDuration={300} //resim yüklenme süresi default 300, eğer resim yavaş yükleniyorsa uzatabilirsin sayfa geç yüklenir arakada resim çoktan yüklenmiş olur
              //source={require('../assets/success.png')} //this is for local storage images
              source={{uri:'https://i.pinimg.com/564x/b0/1d/03/b01d03eae7a1ad6b15551ce80d28dae1.jpg'}}   //this is for web images
              style={styles.image} 
              resizeMode='cover' />
        </View>
        <View style = {styles.resultContainer}>
            <BodyText style={styles.resultText}>Telefonun <Text style={styles.highlight}>{props.userNumber} </Text>
            sayısını bilebilmek için   <Text style={styles.highlight}>{props.roundsNumber} </Text> kez tahmin etti
            </BodyText>
         </View>
        <MainButton onPress={props.onRestart} >
            Yeni Oyun
        </MainButton>
    </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'

    },
    imageContainer:{
        width:235,
        height:235,
        borderRadius:200,
        borderWidth:3,
        borderColor:'black',
        overflow:'hidden',
        marginVertical:15
    },
    highlight:{
        color: 'red',
        fontFamily:'open-sans-bold'
    },
    resultContainer:{
        marginHorizontal:70,
        marginVertical:3
    },
    resultText:{
        marginBottom:15,
        fontSize:18,
        textAlign:'center'
    }
});

export default GameOverScreen;