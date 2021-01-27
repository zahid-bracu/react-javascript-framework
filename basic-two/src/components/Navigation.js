import React from 'react';
import netflix from './image/netflix.png' //importing image
import './style.css' // importing css file


const Navigation = () => {
    return (
        <div>
            
            <div>
                {/* using image */}
                <img src={netflix} style={{width:"80px"}}/>
            </div>

            {/* adding address - href */}
            <a style={{margin:"20px 10px"}} href="/home">Home</a>
            <a style={{margin:"20px 10px"}} href="/Item">Item</a>
        </div>
    );
};

export default Navigation;