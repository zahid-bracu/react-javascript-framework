import React,{useState} from 'react';

const ObjectState = () => {
 const [info,setInfo]=useState({
  name:"spooky",
  id:12,
  message:"This is my message"
 })

 return (
  <>
   <h5>Name : {info.name}</h5>
   <h5>Message : {info.message}</h5>
   <h5>ID : {info.id}</h5>
   <button onClick={()=>setInfo({...info,message:"No more messsage"})}>Change</button>
  </>
 );
};

export default ObjectState;