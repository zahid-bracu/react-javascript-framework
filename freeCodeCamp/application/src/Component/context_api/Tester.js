import React, {useState,useContext, useEffect} from 'react';
import { RestaurantContext } from './RestaurantContextProvider';

import makeid from '../stringGenerator';

const Tester = () => {
 
 const {restaurants,setRestautants,addRestaurants}=useContext(RestaurantContext);
 
 const [string,setString]=useState('');
 
 useEffect(()=>{
  const stringWord=makeid(5);
  setString(stringWord);
 })
 
 
 return (
  <>
   <button onClick={()=>addRestaurants(string)}>Add</button>
  </>
 );
};

export default Tester;