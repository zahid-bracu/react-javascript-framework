import React, {useEffect, useState} from 'react';

const UseEffectCleanup = () => {
 const [data,setData]=useState(window.innerWidth);
 
 function checkWidth() {
  setData(window.innerWidth);
 }
 
 useEffect(()=>{
  window.addEventListener('resize',checkWidth);
  return ()=>{
   window.removeEventListener('resize',checkWidth);
  }
 },[])
 return (
  <>
  <h1>Window Size : {data}</h1>
  </>
 );
};

export default UseEffectCleanup;