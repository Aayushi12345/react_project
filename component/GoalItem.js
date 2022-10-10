import {StyleSheet, View, Text, Pressable} from 'react-native';

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{color: '#210644'}}
      onPress={props.onDeleteItem.bind(this, props.id)}
      //ios
      style={pressed => pressed && style.preesedItem}>
      <View style={style.getItem}>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default GoalItem;

const style = StyleSheet.create({
  getItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: 'gray',
    padding:5
  },
  preesedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
