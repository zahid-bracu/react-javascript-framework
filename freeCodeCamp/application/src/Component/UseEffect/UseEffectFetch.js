import React, {useState , useEffect} from 'react';

const UseEffectFetch = () => {
 const url='https://api.github.com/users';
 const [data,setData]=useState([]);
 
 async function fetchData(){
  const response=await fetch(url);
  const infos=await response.json();
  setData(infos);
 }
 


//  as there is second params and it is an array so the useEffect function only load in initial page loading
 useEffect(()=>{
   fetchData();
 },[])


 
 return (
  <>
<h2> {data.length}</h2>
 {
  data.map((itr)=>{
   return(
    <>
    <h3>{itr.login}</h3>
    <br/>
    <img src={itr.avatar_url} width='200'/>
    </>
   )
  })
 }
  </>
 );
};

export default UseEffectFetch;