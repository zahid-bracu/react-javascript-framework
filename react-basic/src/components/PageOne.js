import React from 'react';

const PageOne = () => {

    // array of object
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
            {   // array of object sending to components dynamically
                arrayObject.map(key=> <Internal data={key}></Internal>)
            }
        </div>
    );
};


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