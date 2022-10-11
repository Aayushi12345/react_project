import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Title from '../component/Title';
import NumberContainer from '../component/game/NumberConatiner';
import PrimaryButton from '../component/PrimaryButton';

function gernratedRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return gernratedRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
  const initialGuess = gernratedRandomBetween(
    1,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() =>
    // useEfct lifecycle mthod ko fuctiona component ke andar use krne ke use m ate h  // directly hum state use nhi kr sakte isliye use sate use krte h
    {
      // ye componenet di mount ,componnet update and componentWillUnmount ka work krta h
      if (currentGuess === userNumber) {
        onGameOver();
      }
    }, [currentGuess, userNumber, onGameOver]);
  function nextGuessHandler(direction) {
    //directiom//"lower" , greater
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Dont't lie", 'you Know this is wrong...', [
        {text: 'sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction == 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNUmber = gernratedRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNUmber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            {' '}
            +
          </PrimaryButton>

          {/* +- */}
        </View>
        {/* return<Text>LOG ROUNDS!</Text> */}
      </View>
    </View>
  );
}
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
