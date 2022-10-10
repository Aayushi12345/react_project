import { TOGGLE_FLAG } from "./constant";

export const toggleFlag = () => (dispatch) => {
  dispatch({
     type:TOGGLE_FLAG  ,
     data:true,

    });
};
// const initialState =0;
// const changeTheNumber = (state = initialState , action) => 
// {
//     switch (action.type)
//     {
//         case "INCREMENT" : return state + 1;
//         case "DECREMENT" : return state - 1;
//          default : return state;
//     }
// }
// export default changeTheNumber;

//jitne bhi aynch task h unko kr wana 
//dispatch reducer ke pass jata h 
//Action plan js ,WhAT TO DO  KYA KRNA H 
//Action ko action creater krta h 

