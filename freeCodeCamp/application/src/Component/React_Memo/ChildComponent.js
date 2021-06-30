import React from 'react';
import SubChild from './SubChild'
const ChildComponent = ({num}) => {
 console.log("Child Component is Reloading")
 return (
  <div>
   <h1>Child Component : {num}</h1>
   <SubChild/>
  </div>
 );
};

export default React.memo(ChildComponent);