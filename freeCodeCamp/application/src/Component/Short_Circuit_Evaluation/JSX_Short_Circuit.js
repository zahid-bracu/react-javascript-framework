import React, {useState} from 'react';

const JSX_Short_Circuit = () => {
const [value,setValue]=useState('');
const [err,setError]=useState(false);
 return (
  <div>
   <h4>{value || `Value is not defined yet`}</h4>
   <h3>{value && `the value is ${value}`}</h3>
   <h4>{err && `Error is present`}</h4>
   <h4>{!err && `No error`}</h4>
   {
    !value && <button onClick={()=>setValue('Random number')}>Add Value</button>
   }
   {
    value && <button onClick={()=>setValue('')}>Remove Value</button>
   }
   
   
   <button onClick={()=>setError(!err)}>Add Error</button>
  </div>
 );
};

export default JSX_Short_Circuit;