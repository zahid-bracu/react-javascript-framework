import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';


const Contact = () => {

    // conditional render & show
    const [flag,setFlag]=useState(false)
   
    // use->state with initial object & properties
    const [user,setUser]=useState({})

   

    function submitFunc(event){

        // prevent -> default to stop reload
        event.preventDefault();
        setFlag(!flag);
         
    }


    
 

    function handleChange(event){
        

        // event target name & value
        console.log(event.target.name+" : "+event.target.value);

        // saving data with use-state
        // loading old data
        var info={...user}
        
        // saving in use-state
        info[event.target.name]=event.target.value;
        setUser(info);
    }
    
    return (
        <div>
            <h3>Contact Us</h3>

            <div>
                {/* on-submit */}
                <form onSubmit={submitFunc}>

                    <label for="name">Name:</label><br/>

                     {/* on-blur */}
                    <input id="name" defaultValue="" onBlur={handleChange}  name="name" type="text" placeholder="Enter Full Name" /><br/>

                    <label for="email">Email</label><br/>
                    <input id="email" defaultValue="" onBlur={handleChange} name="email" type="email" placeholder="Enter Your Email" />


                    <br/>
                    <input type="submit" value='Submit & Show/Hide' />
                </form>

                {/* conditional show */}
                {
                    flag &&
                    <>
                    <h1>Name : {user.name}</h1>
                    <h2>Email : {user.email}</h2>
                    </>
                }
            </div>

                 
 
            
        </div>
    );
};

export default Contact;