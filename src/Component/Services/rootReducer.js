import { create } from 'react-test-renderer';
import {createStore , combineReducers,applyMiddleware} from 'redux'
import homeReducer from './Home/reducer';
import thunk  from 'redux-thunk'

//thunk asynchronous ke liye use hota h 
//bina thunk ke dispatch nhi milta h 

const reducer = combineReducers({
    homeData :homeReducer,
    // cart,
    // wishlist
});

const store  = createStore(reducer,applyMiddleware(thunk));

export default store;

// store => jisne subscribe kr rakha h vo read kr sakta  // ek jagaha sar data h vha usko read kr sakta h 
//applyMiddleware asynchronoue ke liye use krte h 