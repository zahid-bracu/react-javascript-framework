import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const Secret = ({loggedIn}) => {
 const history=useHistory();
 
 useEffect(()=>{
  if(loggedIn){
   history.push('/secret')
  }
  
  if(!loggedIn){
   history.push('/loginfirst')
  }

 },[loggedIn,history])


 return (
  <div>
   <h1>Secret Page</h1>
  </div>
 );
};

export default Secret;