import React, {useState} from 'react';

const SimpleCount = () => {
 const [value,setValue]=useState(0);
 return (
  <div>
   <h1>Value : {value}</h1>
   <button onClick={()=>setValue(value+1)}>Increase</button>
   <button onClick={()=>setValue(value-1)}>Decrease</button>
   <button onClick={()=>setValue(0)}>Reset</button>
  </div>
 );
};

export default SimpleCount;


// Simple Count using useState
// increase
// decrease
// reset