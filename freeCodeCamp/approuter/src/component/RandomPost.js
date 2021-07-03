import React, { useEffect, useState } from 'react';
import {
 Link,
 useParams
} from "react-router-dom";
 

const RandomPost = () => {
 const {id}=useParams();
 return (
  <div>
   <h1>Use Params</h1>
   <h1>ID == {id}</h1>
  </div>
 );
};

export default RandomPost;