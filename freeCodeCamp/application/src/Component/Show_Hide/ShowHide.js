import React, {useState} from 'react';

const ShowHide = () => {
 const [show,setShow]=useState(false);
 return (
  <>
  <div>
   {
    show && <Information/>
   }
  </div>
  <button onClick={()=>setShow(!show)}>Show</button>
  </>
 );
};

const Information=()=>{
 return(
  <>
  <h1>Data is Shown</h1>
  </>
 )
}
export default ShowHide;