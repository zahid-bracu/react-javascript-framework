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

    Data.map(itr=> <ShowDetail key={itr.id} data={itr} /> )

   }
  </div>
 );
};

const ShowDetail=(props)=>{
 return(
  <>
  <h5>{props.data.title}</h5>
  <img src={props.data.img} width='200' height='200'/>
  <h6>{props.data.author}</h6>
  </>
 )
}

export default OnClick;