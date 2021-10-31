import React from "react";
import { View , StyleSheet , Text ,Button , TouchableWithoutFeedback, Touchable , Keyboard, Alert} from 'react-native'; 
import Card from "../component/Card";
import colors from "../constants/colors";
import Input from "../component/Input";
import { useState } from 'react';
import NumberContainer from "../component/NumberContainer";
import BodyText from "../component/BodyText";
import TitleText from "../component/TitleText";

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [corfirmed, setCorfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setCorfirmed(false);
    };

    const confirmInputHandler = () => {
            const chosenNumber = parseInt(enteredValue);
            if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber>99){
                Alert.alert('Geçersiz Sayı','Sayı 1 ila 99 arasında olmak zorunda güzelim, olsa dükkan senin',[{text:'Anladım',style:'destructive',onPress: resetInputHandler}]);
                return;
            }
        setCorfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();        
    };

    let confirmedOutput;
 
    if (corfirmed) {
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <BodyText style={{textAlign:'center'}}>
                Seçtiğiniz Sayı:
            </BodyText>

            {/*<NumberContainer>
                {selectedNumber}
            </NumberContainer> */ }

            <View style={styles.container} >
                <Text style={styles.number} >
                 {selectedNumber}
                </Text>
            </View>
            <Button title="OYUNU BAŞLAT!" color="orange"  onPress={() => props.onStartGame(selectedNumber)} />            
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={ () => {
            Keyboard.dismiss();
        }} >
        <View style = {styles.screen}>
            <TitleText style={styles.title}>Oyunu Başlat!</TitleText>
            <Card style={styles.inputContainer}>
                <BodyText style={styles.text}>Bir Sayı Seç</BodyText>
                <Input style={styles.input} 
                blurOnSubmit 
                autoCapitalize="none" 
                autoCorrect={false} 
                keyboardType="number-pad" 
                maxLength={2}
                onChangeText={numberInputHandler}
                value={enteredValue} />
                <View style={styles.buttonContainer}>
                    <View style = {styles.button}> 
                         <Button title='İPTAL' onPress={resetInputHandler} color="lightseagreen"/> 
                    </View>
                    <View style = {styles.button}> 
                         <Button title='Onayla' onPress={confirmInputHandler} color="cornflowerblue"/> 
                    </View>
                </View>
                
               
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
    inputContainer:{
        height:187,
        width:300,
        maxWidth:'80%', 
        alignItems:'center',
        backgroundColor:colors.primary,
        

    },
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold'

    },
    button:{
        width:100,
        paddingTop:25
    },
    input:{
        textAlign:'center',
        fontSize:30
    },
    summaryContainer:{
        marginTop:50,
        alignItems:'center',
        backgroundColor:'bisque',
        height:170,
        width:142
    },
    text:{
        fontSize:25,
        paddingBottom:10
    },
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


export default StartGameScreen;