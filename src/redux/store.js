import thunk  from 'redux-thunk'
import {createStore ,applyMiddleware, combineReducers} from 'redux'
import rootReducer from './reducer/rootReducerMain';

const store  = createStore(rootReducer,applyMiddleware(thunk));
export default store;
//const store  = combineReducers(reducer,applyMiddleware(thunk));


