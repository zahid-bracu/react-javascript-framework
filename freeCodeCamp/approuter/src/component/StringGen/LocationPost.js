import React from 'react';
import {
 Link, useLocation
} from "react-router-dom";
const LocationPost = ({match}) => {
 console.log(useLocation())
 const query=new URLSearchParams(useLocation().search)
 console.log(query.get('first'))
 console.log(query.get('last'))
 // http://localhost:3000/uselocation/gBhcJ?first=zahid&last=rahman
 return (
  <div>
   <h1>Use Location</h1>
   <h1>Params ID : {match.params.id}</h1>
  </div>
 );
};

export default LocationPost;