import React, {useState, createContext} from 'react';

// creating the restaurant context
export const RestaurantContext=createContext();
 

// context provider 
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