import { StyleSheet } from "react-native";

import { View } from "react-native";

function Card ({ children})
{
    return <View style = { StyleSheet.card}>
        <Text> {children}</Text>
        
        </View>
}

export default Card;
const style = StyleSheet.create({
    card: {
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
});