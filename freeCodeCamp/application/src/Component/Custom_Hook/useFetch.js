import React, {useState,useEffect} from 'react';

const useFetch = (url) => {
 const [isLoading,setLoading]=useState(true);
 const [isError,setError]=useState(false);
 const [user,setUser]=useState([]);

 const getData= async ()=>{
  fetch(url)
  .then((response)=>{
   if(response.status>=200 && response.status<=299){
    return response.json();
   }else{
    setLoading(false);
    setError(true);
   }
  })
  .then(result=>{
   setUser(result)
   setLoading(false);
    setError(false);
  })
  .catch(err=>{
   console.log(err);
  })
 }
 
 useEffect(()=>{
  getData();
 },[])
 return {isError,isLoading,user}
};

export default useFetch;