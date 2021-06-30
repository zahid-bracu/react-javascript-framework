import React from 'react';

const Button = ({handle,children}) => {
 console.log(children)
 return (
  <>
   <button onClick={handle}>
    {children}
   </button>
  </>
 );
};

export default React.memo(Button);