import React, {useState} from 'react';

const FileUseState = () => {
 const [data,setData]=useState("XYZ")

 function changeFunc(){
  setData("ABC");
 }

 
 return (
  <>
   <h3>{data}</h3>
   <button onClick={changeFunc}>Change</button>
  </>
 );
};

export default FileUseState;