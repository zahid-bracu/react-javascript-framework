import React, { useEffect, useState } from 'react';
//importing Info component
import Info from './Info';
// loading the own data
import ownData from './ownData';
// importing Total component
import Total from './Total';
//importing database manager
import {addToDatabaseCart, getDatabaseCart} from './utilities/databaseManager';

import {
    Link
  } from "react-router-dom";

const DataLoad = () => {

    //selected item value saving
    const [selectedItem,setSelectedItem]=useState([]);

    // slicing the own data to 10 item
    var loadedData=ownData.slice(0,10);

    // setting the all data into use state
    const [data, setdata] = useState(loadedData);


    useEffect(()=>{
        var savedDatas=getDatabaseCart();
        const dataKeys=Object.keys(savedDatas);
        const previousData=dataKeys.map(iterator=>{
            const item=ownData.find(id=> id.key===iterator);
            item.count=savedDatas[iterator];
            return item;
        })

        console.log(previousData);
        setSelectedItem(previousData);
    },[])


    // a function to send through prop
    function  testFunc(item){
        const itemToBeAdded=item.key;
        const sameProduct=selectedItem.find(pd=> pd.key===itemToBeAdded);
        let count=1;
        let newItem;
        if(sameProduct){
            count=sameProduct.count+1;
            sameProduct.count=count;
            const others=selectedItem.filter(it=>it.key !== itemToBeAdded);
            newItem=[...others, sameProduct];
        }else{
            item.count=1;
            newItem=[...selectedItem,item];
        }
        setSelectedItem(newItem);
        addToDatabaseCart(item.key,count);
    }

    console.log(selectedItem)

    var total=selectedItem.reduce((sum,id)=>{
        sum=sum+id.count;
        return sum;
    },0)
    console.log(total);
    return (
        <>
        {/* keys value are passing using props  */}
        <div>
            {/* shared components in multiple items */}
            <Total keys={total}>
                <Link to="/addedItems">
                    <button>
                        Review Items
                    </button>
                </Link>
                
            </Total>
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