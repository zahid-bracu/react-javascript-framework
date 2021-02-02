import React from 'react';

// dynamic value pass : use-params
import { useParams, useLocation } from 'react-router-dom';
import Info from './Info';
import ownData from './ownData';

function Detail(){

    // use-location to get the location
    // it's a object
    const location=useLocation();
    
    

    // destructure from use-params hooks
    const {key} =useParams();

    // filtering from the data center
    const info=ownData.find(it=> it.key==key)

    // rendering
    return (
        <>
        {/* a conditional render value is sent to the child class to show a button and hide other button */}
        <Info alter={false} datas={info}/>

        {/* pathname & key of location */}
        <h3> Path: <span style={{color:"red"}}>{location.pathname}</span></h3>
        <h3>Key: <span style={{color:"red"}}>{location.key}</span></h3>
        </>
    );
};

export default Detail;