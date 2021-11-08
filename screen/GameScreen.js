import React, { useState , useRef , useEffect} from "react";
import {Text , View , StyleSheet, Button, Alert, ScrollView, FlatList , Dimensions} from 'react-native';
import NumberContainer from "../component/NumberContainer";
import Card from "../component/Card";
import DefaultStyles from "../constants/Default-styles";
import MainButton from "../component/MainButton";
import { Ionicons } from '@expo/vector-icons';
import BodyText from "../component/BodyText";
import * as ScreenOrientation from 'expo-screen-orientation';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    } else {
        return rndNum;
    }
}

const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
    );
      
const GameScreen = props => {

    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    //bu kodla istersek orientation ı kilitleyebiliyoruz,
    
    const initialGuess = generateRandomBetween(1,100,props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const {userChoice, onGameOver} = props;

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change',updateLayout)

        return () => {
            Dimensions.removeEventListener('change',updateLayout);
        };
    });

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess,userChoice,onGameOver]); 

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
          //  Alert.alert('Don\'t Lie!','You know that this is wrong...',[{text:'Sorry!',style:'cancel'}]);
            Alert.alert('YALAN SÖYLEME','Bunun yanlış olduğunu sende biliyorsun!',[{text:'Pardon!',style:'cancel'}]);
            return;
        }

        if (direction === 'lower'){
            currentHigh.current = currentGuess;
        }
        else {
            currentLow.current=currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber.toString(), ...curPastGuesses] )
    };

    let listContainerStyle = styles.listContainer;

    if(availableDeviceWidth < 364){
        listContainerStyle = styles.listContainerBig;
    }

    if(availableDeviceHeight < 511){
        return (
            <View style = {styles.screen} >
              <Text style={DefaultStyles.title}>Karşı Tarafın Tahmini</Text>
                <View style={styles.controls}>
                    <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >
                        <Ionicons name="md-arrow-down" size={24} color="black" />
                    </MainButton>

                     {/*<NumberContainer>{currentGuess}</NumberContainer>*/}
                    <View style={styles.container} >
                     <Text style={styles.number} >
                         {currentGuess}
                     </Text>
                    </View>
            
                    <MainButton onPress={nextGuessHandler.bind(this, 'greater')} >
                        <Ionicons name="md-arrow-up" size={24} color="black" />   
                    </MainButton>
                </View>
                <View style={listContainerStyle}>
                    {/*<ScrollView contentContainerStyle={styles.list} >
                        {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                    </ScrollView>*/}

                    <FlatList 
                        keyExtractor={(item) => item} 
                        data={pastGuesses} 
                        renderItem={renderListItem.bind(this, pastGuesses.length)} 
                        contentContainerStyle={styles.list}
                    />
                </View>
            </View>
        );
    }

    return(
        <View style = {styles.screen} >
            <Text style={DefaultStyles.title}>Karşı Tarafın Tahmini</Text>
            {/*<NumberContainer>{currentGuess}</NumberContainer>*/}
            <View style={styles.container} >
                <Text style={styles.number} >
                    {currentGuess}
                </Text>
            </View>
            <Card style = {styles.buttonContainer} >
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')} >
                    <Ionicons name="md-arrow-down" size={24} color="black" />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')} >
                    <Ionicons name="md-arrow-up" size={24} color="black" />   
                </MainButton>
            </Card>
            <View style={listContainerStyle}>
                {/*<ScrollView contentContainerStyle={styles.list} >
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView>*/}

                <FlatList 
                    keyExtractor={(item) => item} 
                    data={pastGuesses} 
                    renderItem={renderListItem.bind(this, pastGuesses.length)} 
                    contentContainerStyle={styles.list}
                     />
            </View>
        </View>
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
        justifyContent:'space-around',
        marginTop:Dimensions.get('window').height > 600 ? 30:8 ,
        width:300,
        maxWidth:'80%',
        marginBottom:20
        
    },
    listItem:{
        borderColor:'black',
        borderWidth:2,
        padding:15,
        marginVertical:10,
        backgroundColor:'white',
        flexDirection:'row',
        borderLeftWidth:10,
        justifyContent:'space-between', 
        width:'100%'
    },
    controls:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'79%'
    },
    listContainer:{
        flex:1, 
        //width: Dimensions.get('window').width > 375 ? '60%' : '80%'
        //500 den büyükse 60 değilse 80    
        width:'60%'     
    },
    listContainerBig:{
        flex:1,
        width:'80%'
    },
    list:{
        flexGrow:1,
        // alignItems:'center',
        justifyContent:'flex-end'
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

export default GameScreen;