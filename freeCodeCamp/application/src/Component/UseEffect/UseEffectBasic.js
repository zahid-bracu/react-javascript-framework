import React, {useEffect} from 'react';

const UseEffectBasic = () => {


// as there is not 2nd params or value in the useEffect
// প্রতি render এ use effect load হয়
//component এর কোন কিছু change হয়ে render হলে use effect load হয়

 useEffect(()=>{
  console.log("Rendering inside Use Effect 1");
 })
 
 
 console.log("Rendering Outside Use Effect 2");
 return (
  <div>
   <h1>Use Effect Example</h1>
   <button>Click</button>
  </div>
 );
};

export default UseEffectBasic;

