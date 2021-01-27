import React from 'react';

const PageOne = () => {

    //variable to pass the propes value
    var value="Testing props passing"
    
    
    
    // array of object to pass through the props
    var arrayObject=[
        {
            id:1,
            name:"Zahid"
        },
        {
            id:2,
            name:"Tawhid"
        } 
    ]
    
    return (
        <div>
            {/* function to pass the props : props passing test */}
            <TestProps value={value} />




            {   // array of object sending to components dynamically
                arrayObject.map(key=> <Internal data={key}></Internal>)
            }
        </div>
    );
};


function TestProps(props){
// function to test props passing
    return(
        <div>
            <h2>{props.value}</h2>
        </div>
    )
}


function Internal(props){


    // destructuring
    const {id,name}=props.data
    return(

        
        <div style={{background:"#b8d9ff",width:"400px",margin:"auto",padding:"1px",border:"1px solid black"}}>
            {/* datas are getting & showing dynamically */}
            <h3>ID : {id}</h3>
            <h2>Name: {name}</h2>
            <h5>dynamically data pass from array of object</h5>
        </div>
    )
}



 
export default PageOne;