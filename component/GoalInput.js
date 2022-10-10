import {useState} from 'react';

import {View, TextInput, StyleSheet, Button,Modal} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // empt string
  }
  return (
    // <Modal>
    <View style={style.inputContainer}>
      <TextInput
        style={style.inputTextstyle}
        placeholder="Enter text"
        onChangeText={goalInputHandler}
        value={enteredGoalText}></TextInput>
      <Button title="Add Goal" color="#841584" onPress={addGoalHandler} />
    </View>
    // </Modal>
  );
}
export default GoalInput;
const style = StyleSheet.create({
  inputTextstyle: {
    borderWidth: 1,
    width: '70%',
    height: 40,
    borderColor: 'gray',
    padding: 8,
    flex: 1,
    marginRight: 8,
    marginBottom:5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginBottom:20,
    borderBottomColor: '#ccccccc',
  },
});
