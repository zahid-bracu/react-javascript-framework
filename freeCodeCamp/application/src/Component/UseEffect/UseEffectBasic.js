import React, {useEffect} from 'react';

const UseEffectBasic = () => {
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

// প্রতি render এ use effect load হয়
//component এর কোন কিছু change হয়ে render হলে use effect load হয়