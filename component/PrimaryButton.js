import {View, Text, Pressable, StyleSheet} from 'react-native';

import Colours from './constant/colors';
function PrimaryButton({children , onPress}) {
//   function pressHandler() {    // agar button pr on press nhi likhe ge to aisa kr sakte h 
//     console.log('Pressed!');
//     onPress();
//   }
  return (
    //standard react

    // property name presse preesed is bollen
    <View style={ styles.buttonOuterContainer}>
      <Pressable
        style={pressed =>
            pressed
              ? [styles.buttonInnerContainer, styles.pressed]
              : styles.buttonOuterContainer}
        onPress={onPress}
        android_ripple={{color: Colours.primary600}}>
        <Text style={styles.buttonText}>{children}</Text>

        {/* <Text>{props.children}</Text> */}
      </Pressable>
    </View>
  );
    
}

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden', // ripple effect bhar dikhta h to vo show nhi  ho ga
// riplle ony work in android  

},
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  container: {
    backgroundColor: Colours.Primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed:{

    opacity:0.75
  }
});
