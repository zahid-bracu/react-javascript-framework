import React from 'react';

const SimpleList = () => {
 const array=[11,22,33,44,55,66];
 return (
  <>
   {
    array.map((key,index)=>{
     return(
      <h3>Roll : {key} || {index}</h3>
     )
    })
   }
  </>
 );
};

export default SimpleList;