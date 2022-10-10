import React from 'react';
import {useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import GoalItem from '../component/GoalItem';
import GoalInput from '../component/GoalInput';

export default function YourApp() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
      // enteredGoalText,
    ]);
    // console.log(enteredGoalText);
  }
  function deleteGoalHandle(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id);
    });
  }
  return (
    <View style={{paddingTop: 50, paddingHorizontal: 16, flex: 1}}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={style.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandle}
              />
            );
          }}
          //         choice
          //         keyExtractor = {(item , index )=>
          //         {
          // return item.key;

          //         }}
        ></FlatList>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  goalContainer: {
    flex: 4,
    marginTop: 40,
  },
});
