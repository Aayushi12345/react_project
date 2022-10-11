import {StyleSheet, View, SafeAreaView} from 'react-native';
import {useState} from 'react';
// import {LinearGradientProps} from 'react-native-linear-gradient';
// import { LinearGradient } from "react-native-linear-gradient";
import StartGameScreen from './StartGameScreen';
import GameOverScreen from './GameOverScreen';
import GameScreen from './GameScreen';
// import GameOverScreen from './GameOverScreen';
export default function Game() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  function pickNumberHandler(PickedNumber) {
    setUserNumber(PickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} 
    onGameOver = {gameOverHandler}
    />;
  }
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <View colors={['#4e0329', '#ddb52f']} style={style.rootScreen}>
      {screen}
      {/* <SafeAreaView style = {style.rootScreen}> </SafeAreaView> */}
    </View>
  );
}
const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#FFC0CB',
  },
});
