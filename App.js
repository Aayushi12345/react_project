import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './screen/Home';
import Home from './src/Component/Home';
import Detail from './screen/Detail';
import FlatListDemo from './screen/FlatListDemo';
import AsyncStorage from './screen/AsyncStorage';
import Fetch from './screen/FetchApi';
import { Provider } from 'react-redux';
// import store  from './src/Component/Services/rootReducer';
import store from './src/redux/store';
import FetchDataButtonClick from './screen/FetchDataButtonclick';
import Login from './screen/Login';
import ProductDetail from './screen/ProductDtails';
import Game from './screen/Game';


import GameScreen from './screen/GameScreen';
const Stack = createNativeStackNavigator();

const MYStack = () => 
{
return(
<Stack.Navigator>
<Stack.Screen
name="Home"
component={Home}
options={{ title: 'Home' }}
/>
<Stack.Screen name="Game" component={Game} />
<Stack.Screen name="GameScreen" component={GameScreen} />

<Stack.Screen name="Detail" component={Detail} />
<Stack.Screen name="AsyncStorage" component={AsyncStorage} />

<Stack.Screen name="FlatListDemo" component={FlatListDemo} />
<Stack.Screen name="Fetch" component ={Fetch}  />
<Stack.Screen name="Login" component ={Login}  />
<Stack.Screen name="ProductDetail" component ={ProductDetail}  />

<Stack.Screen name="FetcFetchDataButtonclick" component ={FetchDataButtonClick}  />

</Stack.Navigator> 

);
}

const App = () => 
{
    return(
        <Provider store =  {store}>
<NavigationContainer>
<MYStack/>
</NavigationContainer>
</Provider>

    );
};

export default App;
