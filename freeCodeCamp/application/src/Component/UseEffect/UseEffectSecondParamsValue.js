import React, {useEffect, useState} from 'react';


const UseEffectSecondParamsValue = () => {
 const [value, setValue]=useState(0);

 useEffect(()=>{
  console.log("Rendering inside Use Effect");
  document.title=`Messagae ${value}`;
 
 },[value])
 console.log("Rendering Outside Use Effect");
 
 return (
  <div>
   <h1>Use Effect Example</h1>
 
   <h2>{value}</h2>
   <button onClick={()=>setValue(value+1)}>Click</button>
  </div>
 );
};

export default UseEffectSecondParamsValue;