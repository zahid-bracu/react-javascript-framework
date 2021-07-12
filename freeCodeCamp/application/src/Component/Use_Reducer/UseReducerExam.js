import React, {useReducer} from 'react';

// state declare
const initialState=10;


// reducer function
const reducer=(state,action)=>{
 
 if(action.type=='INCREMENT'){
  state=state+1;
  return state;
 }else if(action.type=='DECREMENT'){
  state=state-1;
  return state;
 }
 return state;
}


const UseReducerExam = () => {
    // use Reducer
    const [state,dispatch]=useReducer(reducer,initialState)
 
 return (
  <>
   <h4>Use Reducer</h4>
   <h1>{state}</h1>
   <button onClick={()=>dispatch({type:"INCREMENT"})}>Increase</button>
   <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrease</button>
  </>
 );
};

export default UseReducerExam;