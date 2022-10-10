import React from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

const YourApp = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <ScrollView></ScrollView> */}

      <Text>Try editing me!! 🎉</Text>
      <Button
        title="Learn More"
        color="#841584"
        onPress={() => Alert.alert('Simple Button Press')}
      />

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Please Enter name"
      />
    </View>
  );
};

export default YourApp;
