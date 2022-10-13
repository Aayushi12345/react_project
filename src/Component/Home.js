
import React, { Component } from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';
import { connect ,useSelector, useDispatch} from 'react-redux';
// import { incNumber,decNumber } from '../action/index';
import {toggleFlag} from '../Component/Services/Home/action';
import { incNumber} from '../action/index';
import { decNumber } from '../action/index';
// import React, { createContext } from 'react';

// import ProductDetail from '../../screen/ProductDtails';

// import {useS}
// class Home extends React.Component
// {
//     constructor(props)
//     {
//         console.log('Hello I am Constructor')
//         super(props);
//         this.state =
//         {
//             text :'Hello World',
//             editable:true,
//         };
//     }
//   onChangeText(text)

//   {
//     console.log(text);
//     this.setState({text});
//   }
//   render()
//   {
// const {text , editable} = this.state;
// const {navigation,flag} = this.props;
// console.log(navigation);

// const FirstName = createContext();

const Home = ({ navigation}) => {
  const myState = useSelector((state) => state.changeTheNumber);

const dispatch = useDispatch();
console.log({myState});
return (
<>
{/* <FirstName.Provider value = {"Aayushi"}>
<ProductDetail/>
</FirstName.Provider> */}


<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

<Text>
Try editing me!! 🎉
</Text>
<Button
title="Game"
color="#841584"
onPress={() => navigation.navigate('Game')} />
<Button
title="Learn More"
color="#841584"
onPress={() => navigation.navigate('Detail')} 
/>
<Button
title="Flat Lists"
color="#841584"
onPress={() => navigation.navigate('FlatListDemo')} 
/>

<Button
title="Asyn Storage"
color="#841584"
onPress={() => navigation.navigate('AsyncStorage')} 
/>
<Button
title='Fetch'
color="#841584"
onPress={() =>navigation.navigate('Fetch')}
/>
<Button
title="Flat Lists"
color="#841584"
onPress={() => navigation.navigate('FetcFetchDataButtonclick')} 
/>
<Button
title="Login"
color="#841584"
onPress={() => navigation.navigate('Login')} 
/>
<Button
title="Login"
color="#841584"
onPress={() => navigation.navigate('ProductDetail')} 
/>

<Button
title="Increment"
color="#841584" 
onPress={() =>
  
  {
    console.log({myState})
    console.log(dispatch(incNumber))}
}
// onPress={() => dispatch(incNumber)}

/>
<Text>
console.log({myState
});

  {myState}
</Text>
<Button
title="decrement"
color="#841584" 

onPress={() => dispatch(decNumber)}

/>
<Image
source={{
uri:'https://reactnative.dev/docs/assets/p_cat2.png',
}}
style={{width:200,height:200}}
/>
<TextInput
style={{
height :40,
borderColor:'gray',
borderWidth :1
}}
defaultValue = "Please Enter name"
/>
{/* <Text>{flag}</Text> */}

</View>
</>
);
}

// ComponentDidMount()
// {
//   console.log(this.props);
//   // this.props.flag;
//   this.props.toggleHomeFlag()

//   // setTimeout(()=>  
//   // {
//   //   this.setState({
//    // this.props.toggleHomeFlag()

//   //     editable:false,
//   //   })
//   // },4000)
// }
export default Home;
// export {FirstName};

// const mapStateToProps = state =>  ({

//   // flag:state.homeData

// });

// const mapDispatchToProps = state =>( {

//   toggleHomeFlag:toggleFlag,

// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,

// )(Home);