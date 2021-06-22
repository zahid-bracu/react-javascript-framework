import React from 'react';
import useFetch from './useFetch';
const Component = () => {
const url='https://jsonplaceholder.typicode.com/users';
 
const {isError,isLoading,user}=useFetch(url)

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