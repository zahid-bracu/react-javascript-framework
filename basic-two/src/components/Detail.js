import React from 'react';
import { useParams } from 'react-router-dom';
import Info from './Info';
import ownData from './ownData';

function Detail(){

    // destructure from use-params hooks
    const {key} =useParams();

    // filtering from the data center
    const info=ownData.find(it=> it.key==key)

    // rendering
    return (
        <>
        {/* a conditional render value is sent to the child class to show a button and hide other button */}
        <Info alter={false} datas={info}/>
        </>
    );
};

export default Detail;