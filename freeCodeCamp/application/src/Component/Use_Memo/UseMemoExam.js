import React, { useMemo, useState } from 'react';

const UseMemoExam = () => {
 const [value,setValue]=useState(0);
 const [mult,setMult]=useState(2);

 
 const multAgain=useMemo(()=>{
  console.log("mult Again function is running")
  return mult*2;
 },[mult])



 return (
  <div>
   <h2>Value : {value}</h2>
   <h2>Mult Value : {mult}</h2>
   <h2>Mult Again Value : {multAgain}</h2>
   <button onClick={()=>setValue(value+1)}>Increase</button>
   <button onClick={()=>setMult(mult*2)}>Multiply</button>
  </div>
 );
};

export default UseMemoExam;