import React, {useState, useEffect} from 'react'; //importing use-state & use-effect


const DataLoad = () => {
    const [data,setData]=useState([]) // use-state is declared

    
    // use-effect is declared
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])



    // css objects
    const style={
        width:"417px",
        color:"#1a1a1a",
        background:"#dbfffd",
        margin:"auto",
        padding:"30px",
        border:"1px solid black"
    }


     
    return (
        //using data map to display the data
        <div style={style}>
            
            {/* data length show */}
            <h2 >Data Length : {data.length} </h2>
            {
                data.map(key=> <li style={{listStyleType:"none",fontWeight: 'bold'}}>{key.email}</li>)
            }
        </div>
    );
};

export default DataLoad;