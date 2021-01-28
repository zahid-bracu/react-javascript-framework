import React, { useEffect, useState } from 'react';
//importing database manager
import {addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart,processOrder} from './utilities/databaseManager';
import ownData from './ownData'
import AddedItemDetail from './AddedItemDetail';
import Total from './Total';
import {
    Link
  } from "react-router-dom";

const AddedItem = () => {
    const [datas, setdatas] = useState([])
    const[flag,setFlag]=useState(false);
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


    function remove(id){
        console.log(id)

        // filtering those which are not in the parameter key
        var newItems=datas.filter(elem => elem.key!=id);
        console.log(newItems);

        // set the filtered data in the state
        setdatas(newItems);

        //remove the data from the database manager 
        removeFromDatabaseCart(id);
    }

    console.log(datas);

    var totalItems=datas.reduce((sum,key)=>{sum=sum+key.count;return sum;},0);
    console.log(totalItems);

    function placeOrder() {
        setdatas([]);
        processOrder();
        setFlag(true);
        
    }

    return (
        <>
            {/* shared component in multiple items */}
            <Total  keys={totalItems}>
                 
                    <button onClick={()=>placeOrder()}>Place Order</button>
                 
            </Total>
          {
              datas.map(key=> <AddedItemDetail remove={remove} data={key}/>)
          }
          {
              flag && <h1>Your Order has been placed</h1>
          }
        </>
    );
};

export default AddedItem;