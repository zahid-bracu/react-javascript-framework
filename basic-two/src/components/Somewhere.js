import React from 'react';
import {useLocation} from 'react-router-dom';
const Somewhere = () => {
    const location=useLocation();
    return (
        <div>
            <h1>Some Where Page</h1>
            <h3>Location : {location.pathname}</h3>
            <h3>Location Key : {location.key}</h3>
        </div>
    );
};

export default Somewhere;<h1>Some Where Page</h1>