// importing react components
import React, { useEffect, useState } from 'react';
//importing database manager
import {addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart,processOrder} from './utilities/databaseManager';
// importing fake/owndata
import ownData from './ownData'
// importing component
import AddedItemDetail from './AddedItemDetail';
import Total from './Total';
// importing react router
import {
    Link,
    useHistory
  } from "react-router-dom";

const AddedItem = () => {

    // array of object use-state for save data from db manager & db 
    const [datas, setdatas] = useState([])

    // boolean flag use-state for conditional rendering
    const[flag,setFlag]=useState(false);
    

    // use effect hook : load data from db manager & db
    useEffect(()=>{

        // data load from database manager
        var data=getDatabaseCart();     

        //getting property key
        var item_keys=Object.keys(data);


        //getting data from database by filtering with keys
        const added_items=item_keys.map(key=>{
            const item=ownData.find(id=> id.key==key);
            item.count=data[key];
            return item;
        })

        setdatas(added_items);

    },[])


    // remove particular item from database
    function remove(id){
         

        // filtering those which are not in the parameter key
        var newItems=datas.filter(elem => elem.key!=id);
         

        // set the filtered data in the state
        setdatas(newItems);

        //remove the data from the database manager 
        removeFromDatabaseCart(id);
    }

     

    //array reduce to sum up total count product
    var totalItems=datas.reduce((sum,key)=>{sum=sum+key.count;return sum;},0);
     

    //process data - clear use-state
    function placeOrder() {
        setdatas([]);
        processOrder();
        setFlag(true);
    }


    // conditional rendering : Using var display =’’ & if-else condition
    var display='';
    if(totalItems==0){
        display=<h2 className="text-center my-5">You have no item here</h2>
    }else{
        display=<Total  keys={totalItems}>
                    <button onClick={()=>placeOrder()}>Place Order</button>
                 </Total>
    }


    var history=useHistory();
    function action() {
        console.log(history);
        history.goBack();
    }

    function push() {
        history.replace("/Item")        
    }

    return (
        <>
            {/* shared component in multiple items */}
            {display}

            {/* data passing using map method */}
            {
              datas.map(key=> <AddedItemDetail remove={remove} data={key}/>)
            }


            {/* Conditional render using flag boolean value */}
            {
              flag && <h1>Your Order has been placed</h1>
            }
            <button onClick={()=>action()}>Go Back</button>
            <button onClick={()=>push()}>Items</button>
        </>
    );
};

export default AddedItem;