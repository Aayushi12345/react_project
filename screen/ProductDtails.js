import React from 'react';
import { AccessibilityInfo } from 'react-native';
import { Icon, Input } from '@rneui/themed';
import { FirstName } from '../src/Component/Home';

import { Alert, Button, Image,StyleSheet,ScrollView, Text, TextInput, View } from 'react-native';

const ProductDetail = () => {
return (
    <>
   
  
<View style={{ flex: 1, backgroundColor:"#fff"}}>

<View style={{ flex: 1,marginTop:40,marginLeft:40,marginRight:20}}>
<FirstName.Consumer>  // consumer ko function k jarurt hoti h 

{(fname) =>
{
    return 
    (

    
    <Text>My Name is {fname}</Text>
    );

}
}
</FirstName.Consumer>
<Text   style = {style.textStyle}>
    Tomato
</Text>

<Text   style = {style.textnumberStyle}>
    88728891
</Text>
<Text   style = {style.lastScanDetailStyle}>
Last Scanned Details 
</Text>
<View style= {{backgroundColor:"#BEBEBE" ,
marginTop:10}}>
<View style ={style.row}>

<Text   style = {style.textScanDetailStyle}>
    Quantity
</Text>
<Text   style = {style.text}>
    120kg
</Text>
</View>
<View
  style={{
    borderBottomColor: 'black',
    marginTop:5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
<View style ={style.row}>

<Text   style = {style.textScanDetailStyle}>
    Price
</Text>
<Text   style = {style.text}>
    $800
</Text>
</View>
</View>

<View style ={style.productInfStyl}>

<Text   style = {style.textScanDetailStyle}>
    Product Information
</Text>
<Text   style = {style.textSaveStyle}>
    Save
</Text>
</View>

<View style= {{backgroundColor:"#FFC0CB" }}>
<Text   style = {style.textpriceStyle}>
    Quantity
</Text>
<View style ={style.quantutyRowStyle}>

{/* <Input 
containerStyle={{ height: 55 ,width: 55}} 
autoCapitalize ='number'
/> */}

<TextInput style={{
height :40,
width :40,
marginLeft:15


}}

// value={number}

  keyboardType={'numeric'}
/>  
<Text  >
    kg
</Text>
{/* <Icon
name='down'
type='font-awesome'
size={24}
color='#000'>


</Icon> */}
</View>
<View
  style={{
    borderBottomColor: 'black',
    marginTop:5,
    width:40,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}>
  </View>
<Text   style = {style.textpriceStyle}>
    Price
</Text>

<Text   style = {style.textSek}>
    1240    (SEK)
</Text>

</View>
</View>

</View>
</>
);
}
const style = StyleSheet.create({
    textStyle:
    {
        fontSize:30,
        textStyle:'bold',
        color:"#000000"

   },
   textnumberStyle:
    {
        fontSize:16,
        textStyle:'bold'
   },
   textScanDetailStyle:
   {
    marginTop:10,
       fontSize:13,
       marginLeft:10,
       textStyle:'bold',
       
  },
  lastScanDetailStyle:
  {
   marginTop:10,
      fontSize:13,
      textStyle:'bold',
      
 },
  textpriceStyle:
   {
       fontSize:13,
       marginTop:16,
       marginLeft:20,
       color:"#000000",

       textStyle:'bold',
       
  },
  textQuantityStyle:
  {
    fontSize:16,
    textStyle:'bold',
    margin:5,
    textAlign:'right',
    flex:1,
    


  },
  text:
  {
    fontSize:16,
    textStyle:'bold',
    marginTop:10,
    textAlign:'right',
    marginRight:10,
    flex:1,
    

  },
  row: {
    flexDirection: 'row',
   
    margin:5
},
quantutyRowStyle: {
    flexDirection: 'row',
    margin:1
   
},
productInfStyl: {
    flexDirection: 'row',
    marginTop:10,
   
},
priceStyl: {
    flexDirection: 'row',
    margin:2,
   
},


textSaveStyle:
{
  fontSize:16,
  textStyle:'bold',
  margin:10,
  color:"#E97451",
  textAlign:'right',
  flex:1,
  //	#FFC0CB pink coliur code

},
textSek:
{
 marginTop:10,
    fontSize:13,
    marginLeft:15,
    textStyle:'bold',
    marginBottom:10,
    
},
});

export default ProductDetail;


