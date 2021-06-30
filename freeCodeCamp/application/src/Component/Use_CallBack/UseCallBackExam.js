import React, {useState, useCallback} from 'react';
import Button from './Button';
const UseCallBackExam = () => {
 const [countOne,setCountOne]=useState(0);
 const [countTwo,setCountTwo]=useState(0);

 const IncreaseOne=useCallback(()=>{
  setCountOne(countOne+1);
 },[countOne])


 const IncreaseTwo=useCallback(()=>{
  setCountTwo(countTwo+1)
 },[countTwo])
 
 return (
  <>
  <Button handle={IncreaseOne} >IncreaseOne</Button>
  <Button handle={IncreaseTwo}>IncreaseTwo</Button>  
  </>
 );
};

export default UseCallBackExam;