import React, {useEffect,useState} from 'react';
import SingleUser from './SingleUser';


const User = () => {
    const [datas,setDatas]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setDatas(data));
    }, [])

     

    return (
        <div>
            <SingleUser/>
            {
                datas.map(key=> <DataShow info={key}></DataShow>)
            }
        </div>
    );
};


function DataShow(props){
    
    var lat=props.info.address.geo.lat;
    var geo=props.info.address.geo.lng;
    return(
        <div style={{border:"1px solid black", width:"300px",display:"block",background:"#FBFDCC",margin:"10px auto",padding:"10px 10px",}}>
            <p>Lat Value : {lat}</p>
            <p>Geo Value : {geo}</p>
        </div>
    )
}

export default User;