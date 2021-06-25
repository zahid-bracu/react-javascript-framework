import React, {useState} from 'react';
import OnChange from './OnChange';
const OnBlur = () => {
 const [info,setInfo]=useState({
  name:"",
  email:"",
  address:""
 })
 
 const funcChange=(e)=>{
  console.log(e.target.value)
  var temp={...info};
  temp[e.target.name]=e.target.value;
  setInfo(temp);
 }


 const submitFunc=(e)=>{
  e.preventDefault();
  console.log(info)
 }
 
 return (
  <div>
   <h1>On Blur</h1>
     <form onSubmit={submitFunc}>
       <label>
         Name:
         <input onBlur={funcChange} type="text" name="name" />
       </label>
       <br/>


       <label>
         Email:
         <input onBlur={funcChange} type="email" name="email" />
       </label>
       <br/>

       <label>
         Address:
         <input onBlur={funcChange} type="test" name="address" />
       </label>
       <br/>
       
       
       <input type="submit" value="Submit" />
    </form> 


    
  </div>
 );
};

export default OnBlur;