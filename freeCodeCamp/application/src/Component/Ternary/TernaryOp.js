import React, {useState} from 'react';

const TernaryOp = () => {
 const [err,setErr]=useState(false);
 return (
  <div>
   {
    err ? (<p>Error Present</p>): (<p>No Error</p>)
   }
   <button onClick={()=>setErr(!err)}>{err ? 'Remove Err':'Add Err'}</button>
  </div>
 );
};

export default TernaryOp;