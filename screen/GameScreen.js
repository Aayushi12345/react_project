
import { useState } from 'react';
import {View,Text ,StyleSheet} from 'react-native';
import Title from '../component/Title';
import NumberContainer from '../component/game/NumberConatiner';
import PrimaryButton from '../component/PrimaryButton';

function gernratedRandomBetween (min,max,exclude)
{
    const rndNum = Math.floor(Math.random() * (max - min))+ min;

    if(rndNum === exclude)
    {
        return gernratedRandomBetween(min,max,exclude);

    }else{
return rndNum;
    }

}


function GameScreen({userNumber}){
    const initialGuess = gernratedRandomBetween(1,100,userNumber );
    const [ currentGuess, setCurrentGuess] = useState(initialGuess);
    return(
     <View style= {styles.screen}>
        <Title>Opponent's Guess</Title>
{/* GUESS */}
<NumberContainer>{currentGuess}</NumberContainer>
<View>

    <Text>Higher or lower?</Text>
    <PrimaryButton></PrimaryButton>
    {/* +- */}
    </View>
    {/* return<Text>LOG ROUNDS!</Text> */}
    </View>
    )
}
export default GameScreen;
const styles = StyleSheet.create({

    screen:{

        flex:1,
        padding:12,
        
    },
   
})