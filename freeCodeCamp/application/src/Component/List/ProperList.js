import React from 'react';
import Data from './Data';
const ProperList = () => {
 console.log(Data)
 return (
  <>
   {
    Data.map((book)=>{
     const {title,author,id,img}=book;
     return (
      <DataShow key={book.id}  title={title} img={img} author={author}/>
     )
    })
   }
  </>
 );
};


const DataShow=(props)=>{
 const {title,author,img}=props
 return(
      <>
      <img src={img} width='200' />
      <p>{title}</p>
      <p>{author}</p>
       
      </>
 )
}

export default ProperList;