import React, {useState, useEffect} from 'react';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function AsyncxStorage() {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          setName(value);
        } else {
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write anything');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={styles.titleText}>I am Asynch Task🎉</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder=""
        onChangeText={value => setName(value)}
      />
      <Button style={styles.buttonStyle} title="Savecve" onPress={setData} />

      <Button style={styles.buttonTextStyles} title="Get" onPress={getData} />

      <Text style={styles.titleText}>My Data {name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 20,
    height: 60,
    justifyContent: 'center',

    minWidth: 250,
  },
  buttonTextStyles: {
    fontSize: 60,
    fontWeight: 'bold',
    justifyContent: 'center',
    height: 40,
    marginTop: 40,
  },
});
