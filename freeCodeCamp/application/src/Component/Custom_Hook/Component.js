import React from 'react';
import useFetch from './useFetch'; //importing the custom hooks file
const Component = () => {
const url='https://jsonplaceholder.typicode.com/users';
 
const {isError,isLoading,user}=useFetch(url) // sending value to custom hook file and receiving multiple state value from that file

 if(isLoading){
  return(
   <h1>Loading</h1>
  )
 }

 if(isError){
  return(
   <h2>Error</h2>
  )
 }

 if(user){
  return(
   <h2>{user.length}</h2>
  )
 }
};

export default Component;