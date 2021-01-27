import React, { useEffect, useState } from 'react';
//importing Info component
import Info from './Info';
// loading the own data
import ownData from './ownData';
// importing Total component
import Total from './Total';
//importing database manager
import {addToDatabaseCart, getDatabaseCart} from './utilities/databaseManager';

const DataLoad = () => {

    //key value saving
    const [keys,setKeys]=useState([]);

    // slicing the own data to 10 item
    var loadedData=ownData.slice(0,10);

    // setting the all data into use state
    const [data, setdata] = useState(loadedData);


    useEffect(()=>{
        var data=getDatabaseCart();    
        console.log(Object.values(data)) 
        var item_keys=Object.keys(data);
        console.log(item_keys);

         

        // const added_items=item_keys.map(key=>{
        //     const item=ownData.find(id=> id.key==key);
        //     item.count=data[key];
            
        //     return item.key;
        // })

        // setdata(added_items);

    },[])

    // a function to send through prop
    function  testFunc(key){
        console.log("Clicked Once");
        console.log(key);
        
        // saving in the use-state with the old data using spread operator
        var newKeys=[...keys,key];

        //checking how many times same items has been clicked
        var prod=newKeys.filter(id=> id==key)

        // saving into database manager
        addToDatabaseCart(key,prod.length);
        setKeys(newKeys);
    }

    console.log(keys)

    return (
        <>
        {/* keys value are passing using props  */}
        <div>
            <Total keys={keys}/>
        </div>

        <div>
            {
                // passing data from one component to another
                // key must be passed
                // alter: a conditional boolean render value is sent to show some button
                data.map(pd=> <Info alter={true} testFunc={testFunc} key={pd.key} datas={pd} ></Info>)
            }          
        </div>

        
        </>
    );
};

export default DataLoad;