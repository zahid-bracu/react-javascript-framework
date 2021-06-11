import React, {useState} from 'react';

const MultipleUseState = () => {
 const [name,setName]=useState('spooky');
 const [id,setID]=useState(15101122);
 const [mail,setMail]=useState('zahid.mym@gmail.com')
 
 return (
  <>
   <h5>Name : {name}</h5>
   <h5>ID : {id}</h5>
   <h5>Mail : {mail}</h5>
   <button onClick={()=>setMail("jahid.mym@yahoo.com")}>Click to change mail</button>
  </>
 );
};

export default MultipleUseState;


// set multiple value in multiple use state