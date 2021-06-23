import React from 'react';
import Data from './Data';
const keyProps = () => {
 console.log(Data)
 return (
  <>
   {
    Data.map((book,index)=>{
      
     return (
      // spread operator & Key
      <DataShow key={index} {...book}/>
     )
    })
   }
  </>
 );
};


const DataShow=(props)=>{
 const {title,author,img,key}=props
 return(
      <>
      <img src={img} width='200' />
      <p>{title}</p>
      <p>{author}</p>
       
      </>
 )
}

export default keyProps;