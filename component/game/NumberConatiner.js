import { View ,Text,StyleSheet,Dimensions} from 'react-native'
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
const deviceWidth = Dimensions.get('window').width;
const style = StyleSheet.create({
  container:{
        borderWidth:4,
        borderColor:Colours.accent500,
        padding: deviceWidth < 380 ? 12 :24,
        borderRadius:8,
        margin: deviceWidth < 380 ?12 :24,
        alignItems:'center',
        justifyContent:"center"


    },
    numberText:{
        color:Colours.accent500,
        fontSize:36,
        fontWeight:'bold'


    }
})
