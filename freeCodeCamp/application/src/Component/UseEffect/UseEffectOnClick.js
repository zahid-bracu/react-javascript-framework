import React, {useEffect, useState} from 'react';


const UseEffectOnClick = () => {
 const [value, setValue]=useState(0);

 useEffect(()=>{
  console.log("Rendering inside Use Effect");
 })
 console.log("Rendering Outside Use Effect");
 
 return (
  <div>
   <h1>Use Effect Example</h1>
 
   <h2>{value}</h2>
   <button onClick={()=>setValue(value+1)}>Click</button>
  </div>
 );
};

export default UseEffectOnClick;

// use effect run করবে যখন use state এর কোন value event এর মাধ্যমে change হবে
//