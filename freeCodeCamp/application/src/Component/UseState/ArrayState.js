import React, {useState} from 'react';
import {data} from './data';

const ArrayState = () => {
 const [info,setInfo]=useState(data); // declare a use-state
 const removeItem=(value)=>{
  const restDatas=info.filter(key=> key.id!=value); // filter data
  setInfo(restDatas); // set rest data
 }
 return (
  <div>
   {
    info.map(itr=> <ShowInfo removeItem={removeItem} key={itr.id} info={itr} />)
   }
   <button onClick={()=>setInfo([])}>Clear Data</button> {/* clearing the list*/}
  </div>
 );
};





function ShowInfo(props){
 const {id,name}=props.info;
 return(
  <>
  <h5>Name : {name}</h5>
  <h6>ID : {id}</h6>
  <button onClick={()=>props.removeItem(id)}>remove</button>
  </>
 )
}


export default ArrayState;