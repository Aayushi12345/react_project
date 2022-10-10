import { types } from "@babel/core";
import { TOGGLE_FLAG } from "./constant";

 const initialState = {
 homeflag:false
//  loading:false,
//  users: [],
//  error: ''

 //isloading:true
};
const homeReducer = (state = initialState , action= {}) =>
{
    console.log("aa");

    console.log(action);
    switch(action.type)
    {
        case TOGGLE_FLAG:
            return {...state, homeflag:action.data};
         
         
            default:
                return state;
    }
};
export default homeReducer;

//reducer kaise work krna h 


///... state  agar ... nhi lgaye ge toh intisal state de dega update nhi kre ge  spoose ([]) de de ga global 