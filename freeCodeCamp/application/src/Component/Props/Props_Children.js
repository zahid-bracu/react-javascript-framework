import React from 'react';

const Props_Children = () => {
 return (
  <>
   <Component>
     <h2>This is children</h2>
    </Component>
  </>
 );
};


const Component = ({children})=>{
 return(
  <>
   <h2>Other Component</h2>
   {children}
  </>
 )
}

export default Props_Children;