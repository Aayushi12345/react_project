import React from 'react';
import {
  Alert,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

const FlatLsitDemo = () => {
  const names = [
    {
      name: 'vinod',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
    {
      name: 'thapa',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
    {
      name: 'Aayushi',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
    {
      name: 'Aayu',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
    {
      name: 'vinod',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
    {
      name: 'thapa',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
    {
      name: 'Aayushi',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
    {
      name: 'Aayu',
      ImageUrl: 'https://reactnative.dev/docs/assets/p_cat2.png',
    },
  ];

  const pressHandler = name => {
    console.log(name);
  };

  return (
    <FlatList
      // horizontal
      data={names}
      renderItem={element => {
        return (
          <TouchableOpacity onPress={() => pressHandler(element.item.name)}>
            <Text style={style.textStyle}>{element.item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};
const style = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    padding: 30,
    backgroundColor: 'blue',
    height: 100,
    margin: 20,
    color: 'white',
  },
  listStyle: {
    textAlign: 'center',
    margin: 20,
    padding: 10,
  },
});

export default FlatLsitDemo;
