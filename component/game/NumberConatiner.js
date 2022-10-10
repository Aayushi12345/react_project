import { View ,Text,StyleSheet} from 'react-native'
import Colours from '../constant/colors';

function NumberContainer({children})
{
    return(

        <View style={style.container}>

            <Text style={ style.numberText}>{children}</Text>
        </View>
    )



}
export default NumberContainer;
const style = StyleSheet.create({
  container:{
        borderWidth:4,
        borderColor:Colours.accent500,
        padding:24,
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:"center"


    },
    numberText:{
        color:Colours.accent500,
        fontSize:36,
        fontWeight:'bold'


    }
})
