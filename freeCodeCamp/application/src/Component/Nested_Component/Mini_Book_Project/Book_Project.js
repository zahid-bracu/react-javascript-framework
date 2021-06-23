import React from 'react';

const Book_Project = () => {
 return (
  <div>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
   <Book/>
  </div>
 );
};

const Book=()=>{
 return(
  <>
  <Image/>
   <Title/>
   <Author/>
  </>
 )
}

const Image=()=><img style={{width:"100px"}} src='https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'/>
const Author=()=> <h5>Wilson Informatica</h5>
const Title=()=><h4>Moon & Back</h4>
export default Book_Project;