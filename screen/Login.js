import React from 'react';
import {
  Alert,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Input} from '@rneui/themed';
// import { Input } from 'react-native-elements';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, marginTop: 40, marginLeft: 20, marginRight: 20}}>
        <Image source={require('../src/Assets/axfoodLogo.jpg')} />
        <Input
          containerStyle={{height: 55, marginTop: 40}}
          placeholder="Enter User Id"
          autoCapitalize="words"
        />
        <Input
          containerStyle={{height: 55, marginTop: 40}}
          placeholder="Password"
          autoCapitalize="words"
          secureTextEntry={true}
        />
        <TouchableOpacity style={style.buttonStyle}>
          <Button
            title="Login"
            color="#FF5E0E"
            onPress={() => navigation.navigate('ProductDetail')}
          />
        </TouchableOpacity>
        <Text style={style.textStyle}>Forgot Password ?</Text>
        <View style={style.row}>
          <Text style={style.newUserText}>New User?</Text>
          <Text style={style.signUp}>Signup</Text>
        </View>
      </View>

      <View style={style.bottomContainer}>
        <Image
          style={style.imageContainer}
          source={require('../src/Assets/bottomimg.jpg')}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    textAlign: 'center',
  },
  buttonStyle: {
    fontSize: 30,
    textStyle: 'center',
    padding: 10,
    marginTop: 30,
  },
  newUserText: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },

  signUp: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    color: '#FF5E0E',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 400,
    marginTop: 40,
    height: 250,
    resizeMode: 'stretch',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
  },
});

export default Login;
