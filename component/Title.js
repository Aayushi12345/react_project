
import {Text , StyleSheet} from 'react-native';

function Title({children}) {
    return(
<Text style = {styles.tittle}>{children}</Text>

    )
}
export default Title
 const styles = StyleSheet.create({

    tittle:{
        fontSize:18,
        fontWeight:'bold',
        color:'ddb52f',
        textAlign:'center',
        borderColor:'#000000',
        padding:12
        
    
 }
});
