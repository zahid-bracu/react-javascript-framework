import React, { useEffect, useState } from 'react';
//importing database manager
import {addToDatabaseCart, getDatabaseCart} from './utilities/databaseManager';
import ownData from './ownData'
import AddedItemDetail from './AddedItemDetail';

const AddedItem = () => {
    const [datas, setdatas] = useState([])
    useEffect(()=>{
        var data=getDatabaseCart();     
        var item_keys=Object.keys(data);


        const added_items=item_keys.map(key=>{
            const item=ownData.find(id=> id.key==key);
            item.count=data[key];
            return item;
        })

        setdatas(added_items);

    },[])

    console.log(datas);

    return (
        <>
          {
              datas.map(key=> <AddedItemDetail data={key}/>)
          }  
        </>
    );
};

export default AddedItem;