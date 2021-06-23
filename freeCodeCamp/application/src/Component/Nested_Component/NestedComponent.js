import React from 'react';

const NestedComponent = () => {
 return (
  <div>
   <OtherComponent/>
   <SmallComponent/>
  </div>
 );
};
const OtherComponent=()=>{
 return(
  <>
  <div>
   <h1>Other Component</h1>
  </div>
  </>
 )
}


const SmallComponent=()=><h1>Another Component</h1>
export default NestedComponent;