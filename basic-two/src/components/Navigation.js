import React, { useEffect, useState, useContext } from 'react';
import netflix from './image/netflix.png' //importing image
import './style.css' // importing css file
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
import {CategoryContext} from '../App';

const Navigation = (props) => {
    const {state}=props;

    const [category,setCategory]=useContext(CategoryContext);
    return (
        <div>
            
            <div>
                {/* using image */}
                <img src={netflix} style={{width:"80px"}}/>
            </div>

            {/* adding address - to */}
            <Link style={{margin:"20px 10px"}} to="/home">Home</Link>
            <Link style={{margin:"20px 10px"}} to="/Item">Item</Link>
            <Link style={{margin:"20px 10px"}} to="/addedItems">Added Items</Link>
            <Link style={{margin:"20px 10px"}} to="/test">Test Page</Link>
            <Link style={{margin:"20px 10px"}} to="/contact">Contact</Link>
            <span style={{margin:"20px 10px",textDecoration:"underline"}}>State Value : {state}</span>
            <span style={{margin:"20px 10px",textDecoration:"underline"}}>Category Value: {category}</span>
        </div>
    );
};

export default Navigation;