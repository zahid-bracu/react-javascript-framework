import React, {useState} from 'react';

const Contact = () => {

    // use->state with initial object & properties
    const [user,setUser]=useState({
        name:"",
        email:""
    })

    function submitFunc(event){

        // prevent -> default to stop reload
        event.preventDefault();
        console.log(user);
    }

    function handleChange(event){
        

        // event target name & value
        console.log(event.target.name+" : "+event.target.value);
        if(event.target.name="name"){
            user.name=event.target.value;
        }
        if(event.target.name="email"){
            user.email=event.target.value;
        }
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;