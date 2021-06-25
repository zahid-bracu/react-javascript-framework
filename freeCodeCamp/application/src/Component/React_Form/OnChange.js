import React, {useState} from 'react';

const OnChange = () => {
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
   <h1>On Change</h1>
     <form onSubmit={submitFunc}>
       <label>
         Name:
         <input onChange={funcChange} type="text" name="name" />
       </label>
       <br/>


       <label>
         Email:
         <input onChange={funcChange} type="email" name="email" />
       </label>
       <br/>

       <label>
         Address:
         <input onChange={funcChange} type="test" name="address" />
       </label>
       <br/>
       
       
       <input type="submit" value="Submit" />
    </form> 
  </div>
 );
};

export default OnChange;