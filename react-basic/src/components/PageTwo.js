import React from 'react';

const PageTwo = () => {

    // array of object
    var arrayObject=[
        {
            id:15101122,
            name:"Md. Zahidur Rahman"
        },
        {
            id:2,
            name:"Tawhid"
        } 
    ]
    
    return (
        <div>
           <Internal id={arrayObject[0].id} name={arrayObject[0].name}/>
        </div>
    );
};


function Internal(props){


    // destructuring
    const {id,name}=props
    return(

        // datas are getting dynamically
        <div style={{width:"417px",color:"#548999",background:"#e3dbd9",margin:"auto",padding:"1px",border:"1px solid black"}}>
            {/* datas are getting & showing dynamically */}
            <h3>ID : {id}</h3>
            <h2>Name: {name}</h2>
            <h6>This is array of object index pass component</h6>
        </div>
    )
}



 
export default PageTwo;