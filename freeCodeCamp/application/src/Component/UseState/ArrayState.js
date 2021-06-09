import React, {useState} from 'react';
import {data} from './data';
const ArrayState = () => {
 const [info,setInfo]=useState(data);
 console.log(info);
 return (
  <>
   
  </>
 );
};
function ShowInfo(){
 return(
  <></>
 )
}
export default ArrayState;