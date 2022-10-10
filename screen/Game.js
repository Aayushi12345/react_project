import {StyleSheet, View ,SafeAreaView} from 'react-native';
import { useState } from 'react';
// import {LinearGradientProps} from 'react-native-linear-gradient';
// import { LinearGradient } from "react-native-linear-gradient";
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
export default function Game() {

    const[userNumber,setUserNumber] = useState();
    function pickNumberHandler (PickedNumber)
    {
        setUserNumber(PickedNumber);
    }
    let screen = <StartGameScreen  onPickNumber = { pickNumberHandler}/>
    if(userNumber)
    {
        screen =<GameScreen/>;
    }
  return (
    <View
      colors={['#4e0329', '#ddb52f']}
      style={style.rootScreen}>
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
