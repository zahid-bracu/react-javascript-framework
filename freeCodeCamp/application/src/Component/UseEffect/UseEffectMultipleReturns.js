import React, {useState , useEffect} from 'react';

const UseEffectMultipleReturns = () => {
 const url='https://api.github.com/users/mojombo';
 const [isLoading,setLoading]=useState(true);
 const [isError,setError]=useState(false)
 const [user,setUser]=useState('default user')

 const getUser=()=>{
  fetch(url).then(response=>{
   if(response.status>=200 & response.status<=299){
    return response.json()
   }else if(response.status>=300){
    setError(true);
    setLoading(false);
   }
  })
  .then(result=>{
   const {login}=result;
   setLoading(false);
   setUser(login);
  })
  .catch(err=>{
   console.log(err)
  })
 }


 useEffect(()=>{
  getUser();
 },[])

 console.log(user);

if(isLoading){
 return(
  <h3>Is Loading</h3>
 )
}
if(isError){
 return(
  <h2>Network Error</h2>
 )

}else if(user){
 return(
  <h2>{user}</h2>
 )
}
 
}

export default UseEffectMultipleReturns;