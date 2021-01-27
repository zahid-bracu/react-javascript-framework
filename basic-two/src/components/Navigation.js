import React from 'react';
import netflix from './image/netflix.png' //importing image
import './style.css' // importing css file
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Navigation = () => {
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
        </div>
    );
};

export default Navigation;