import React from 'react';
import {Data, xy} from './Data';
const OnClick = () => {


 function checkSimple(){
  console.log("Simple Click")
 }
 
 function checkDynamic(params) {
  console.log(params);
 }

 function checkInfo(e){
  console.log(e.target);
 }
 
 return (
  <div>
   {

    Data.map((value)=>{
     return(
      <>
      <button onClick={checkInfo}><img  src={value.img} width='200' height='200'/></button>
       
       <div>
        <h5>{value.title}</h5>
         <h6>{value.author}</h6>
         <button onClick={checkSimple}>Simple Click</button>
        <button onClick={()=>checkDynamic(value.title)}>Dynamic Click</button>
        <h5>{xy}</h5>
       </div>
      </>
     )
    })

   }
  </div>
 );
};

export default OnClick;