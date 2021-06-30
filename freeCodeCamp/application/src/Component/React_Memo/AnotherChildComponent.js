import React from 'react';

const AnotherChildComponent = () => {
 console.log("Another Child Component is Reloading")
 return (
  <div>
   
  </div>
 );
};

export default React.memo(AnotherChildComponent);