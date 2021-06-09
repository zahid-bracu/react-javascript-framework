import React from 'react';
import Data from './Data';
const ProperList = () => {
 console.log(Data)
 return (
  <>
   {
    Data.map((book)=>{
      
     return (
      // spread operator & Key
      <DataShow key={book.id} {...book}/>
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

export default ProperList;