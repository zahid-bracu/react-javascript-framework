import React, {useState} from 'react';

const FunctionalValueChange = () => {
 const [value,setValue]=useState(0);
 
 const increase=()=>{
  setTimeout(()=>{
   setValue((value)=>{
    return value+1;
   })
  },2000)
 }
 
 return (
  <div>
   <h1 style={{textAlign:"center"}}>{value}</h1>
   <button onClick={increase} style={{display:'block',margin:"auto"}}>Increase</button>
  </div>
 );
};

export default FunctionalValueChange;