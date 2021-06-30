import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import AnotherChildComponent from './AnotherChildComponent';
const UseMemoExam = () => {
 const [value,setValue]=useState(0)

 
 return (
  <>
   <button onClick={()=>setValue(value+1)}>Increase</button>
   <button onClick={()=>setValue(value-1)}>Decrease</button>
   <ChildComponent num={value}/>
   <AnotherChildComponent/>
  </>
 );
};

export default UseMemoExam;