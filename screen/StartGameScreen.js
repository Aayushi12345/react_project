import {useState} from 'react';

import {
  TextInput,
  StyleSheet,
  View,
  Alert,
  userWindowDimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import PrimaryButton from '../component/PrimaryButton';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnterNumber] = useState('');
  0;

//   const {width, height} = userWindowDimensions; // using screen height and widht

  function numberInputHnalder(enteredText) {
    setEnterNumber(enteredText);
  }
  function resetInputHandler() {
    setEnterNumber('');
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enteredNumber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        'Invalid number',
        ' Nmber has to be a number between 1 to 99.',
        [{text: 'OKAY', style: 'destructive', onPress: resetInputHandler}],
      );
      //shoe alert
      return;
    }
    onPickNumber(choseNumber);
    // const marginTopDistance = height < 380 ? 30 : 100;
    // console.log('Valid Number')
  }
  return (
    <ScrollView style ={style.screen}>
    <KeyboardAvoidingView style = {style.screen} behavior ="position">
    <View style={style.inputConatiner}>
      <TextInput
        style={style.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHnalder}
      />
      <View style={style.buttonsContainer}>
        <View style={style.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={style.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}
export default StartGameScreen;

const style = StyleSheet.create({


    screen:{
        flex:1,
    },
  inputConatiner: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 50,
    backgroundColor: '#4e0329',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    //add shadow in ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25, // tranparent
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
