import React, { useEffect, useState } from 'react';
import {
 Link
} from "react-router-dom";
import makeid from './StringGen/stringGen';
import './style.css';
const NavBar = () => {
 const [string,setString]=useState('');
 useEffect(()=>{
  setString(makeid(5));
 })
 return (
  <div>
   <ul>
    <li><Link className="Link" to='/'>Home</Link></li>
    <li><Link className="Link" to='/aboutme'>About Me</Link></li>
    <li><Link className="Link" to='/profile'>Profile</Link></li>
    <li><Link className="Link" to='/random'>Random</Link></li>
    <li><Link className="Link" to={`/paramsmatch/${string}`}>Params Match  </Link></li>
    <li><Link className="Link" to={`/useparams/${string}`}>Use Param  </Link></li>
    <li><Link className="Link" to={`/uselocation/${string}`}>Use Location  </Link></li>
   </ul>
  </div>
 );
};

export default NavBar;