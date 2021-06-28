import React, {useReducer} from 'react';
import makeid from '../stringGenerator';
const initialState={
 array:[],
 value:0
}


const reducer=( state, action)=>{
 console.log(state,action);
 if(action.type=='Add'){
  const temp=[...state.array,action.payload];
  const tempValue=state.value+1;
  return {array:temp,value:tempValue};
 }

 if(action.type=='Remove'){
  const temp=state.array.filter((key)=>{
   return key!==action.payload
  })
  const tempValue=state.value-1;
  return {array:temp,value:tempValue}
 }
}

const UseReducerPayload = () => {
 const [state,dispatch]=useReducer(reducer,initialState);
 
 function addInformation(data){
  console.log(data)
  dispatch({
   type:'Add',
   payload:data
  })
 }

 function removeInformation(data){
  console.log(data);
  dispatch({
   type:'Remove',
   payload:data
  })
 }
 console.log(state.array);
 return (
  <>
  <button onClick={()=>addInformation(makeid(5))}>Add</button>
  {
   state.array.map((key,index)=>{
    return(
     <>
     <p>{key}</p>
     <button onClick={()=>removeInformation(key)}>Remove</button>
     </>
    )
   })
  }
   
  </>
 );
};

export default UseReducerPayload;