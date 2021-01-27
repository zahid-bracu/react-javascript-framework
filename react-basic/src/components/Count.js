import React, {useState} from 'react';

const Count = () => {


    // using use-state to load value
    const [count, setCount]=useState(10)

    return (
        <div>
            <h3>Count Value : {count}</h3>


            {/* passing the use sate value to other function */}
            <Check countValue={count}/>


            {/* using use-state function & value in the event handler */}
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    );
};


function Check(props) {

    // destructuring from the props
    const { countValue }=props

    
    return(
        <h2>Count Value : {countValue} </h2>
    )
}

export default Count;