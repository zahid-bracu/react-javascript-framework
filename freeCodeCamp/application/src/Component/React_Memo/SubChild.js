import React from 'react';

const SubChild = () => {
 console.log("Sub Child")
 return (
  <div>
   
  </div>
 );
};

export default React.memo(SubChild);