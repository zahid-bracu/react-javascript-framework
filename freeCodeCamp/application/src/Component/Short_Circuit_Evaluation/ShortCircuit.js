import React, {useState} from 'react';

const ShortCircuit = () => {
const [value,setValue]=useState('');
const message= value || 'value is not defined';
const PrintMessage = value && `Defined value : ${value}`  ;
 return (
  <div>
   <h3>{message}</h3>
   <h4>{PrintMessage}</h4>
   <button onClick={()=>setValue('Spooky')}>Define Value</button>   
  </div>
 );
};

export default ShortCircuit;