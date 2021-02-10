import React, { useEffect, useState, useContext } from 'react';
//importing Info component
import Info from './Info';
// loading the own data
import ownData from './ownData';
// importing Total component
import Total from './Total';
//importing database manager
import {addToDatabaseCart, getDatabaseCart} from './utilities/databaseManager';
// context api import
import {CategoryContext} from '../App';

// react router import
import {
    Link
  } from "react-router-dom";

const DataLoad = (props) => {

    //context api import
    const [category,setCategory]=useContext(CategoryContext);
    
    // passing state & use-state using props
    // destructure state & use-state from props
    const {state,setState}=props;

    //selected item value saving
    const [selectedItem,setSelectedItem]=useState([]);

    // slicing the own data to 10 item
    var loadedData=ownData.slice(0,10);

    // setting the all data into use state
    const [data, setdata] = useState(loadedData);


    useEffect(()=>{
        // loading previous data into cart
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
    // adding item to use-state with count value
    function  testFunc(item){
        const itemToBeAdded=item.key;

        // checking the item is it already added to the cart/selected-item state or not
        // checking click count
        const sameProduct=selectedItem.find(pd=> pd.key===itemToBeAdded);


        let count=1;
        let newItem;
        
        // if already selected
        if(sameProduct){
            // count value one increases
            count=sameProduct.count+1;

            // increased count value updated
            sameProduct.count=count;

            // load other data  except the clicked item
            const others=selectedItem.filter(it=>it.key !== itemToBeAdded);
            
            //now saving it to a collection with other data + new item with updated clicked count
            newItem=[...others, sameProduct];
        }else{
            // if the value is not clicked earlier
            item.count=1;
            newItem=[...selectedItem,item];
        }
        setSelectedItem(newItem);

        // adding to database with click-count and key value
        addToDatabaseCart(item.key,count);
    }

     

    // reducer to find total item count
    var total=selectedItem.reduce((sum,id)=>{
        sum=sum+id.count;
        return sum;
    },0)
     
    return (
        <>
        <div>

            {/* Shared Use-state value with multiple component */}
            <h2>Shared use-state in multiple component</h2>


            {/* change the use-state value which was shared with multiple component */}
            <button className="mt-5" onClick={()=>setState(state+1)}>Increase</button>
            <button className="mb-5" onClick={()=>setState(state-1)}>Decrease</button>
            
        </div>

        <div className="my-4">

            {/* context api value changes */}
            <h3>Set Your Category</h3>
            <button className="ml-2" onClick={()=>{setCategory("books")}}>Set catagory : Books</button>
            <button className="ml-2" onClick={()=>{setCategory("movies")}}>Set category : Movies</button>
            <button className="ml-2" onClick={()=>{setCategory("")}}>clear category</button>
        </div>
        
        {/* keys value are passing using props  */}
        <div>


            {/* shared components in multiple items */}
            
            {/* sending button ase props dot children rendering */}
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