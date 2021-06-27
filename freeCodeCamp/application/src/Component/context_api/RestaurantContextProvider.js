import React, {useState, createContext} from 'react';

export const RestaurantContext=createContext();
 
const RestaurantContextProvider=(props)=>{
 const [restaurants,setRestautants]=useState([]);

 const addRestaurants=(restaurant)=>{
  console.log("working");
  console.log(restaurants);
  setRestautants([...restaurants,restaurant])
 }

 return(
   <RestaurantContext.Provider value={{restaurants,setRestautants,addRestaurants}}>
    {props.children}
   </RestaurantContext.Provider>
 )
}
 

export default RestaurantContextProvider;