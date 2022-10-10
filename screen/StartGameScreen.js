import {useState} from 'react';

import {TextInput, StyleSheet, View, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colours from '../component/constant/colors';
import PrimaryButton from '../component/PrimaryButton';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnterNumber] = useState('');

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
    // console.log('Valid Number')
  }
  return (
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
  );
}
export default StartGameScreen;

const style = StyleSheet.create({
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
    borderBottomColor: Colours.accent500,
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
