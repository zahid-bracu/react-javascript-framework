import React, {useState} from 'react';
import './style.css'
import {
    Link
  } from "react-router-dom"; //importing react router Link


const Info = (props) => {

   

    const {alter}=props;
    // destructuring the props dynamic data values from array of objects
    var {key, name, author, Director}=props.datas;

     

    //destructuring the function that is passed by props
    const testFunc=props.testFunc;



     // a state to show/hide value and vice - versa
     const [Key,setKey]=useState(); 
    // a event handler function to show value
    function showKey(value) {
        setKey(value);
    }

    // a event handler function to hide value
    function removeKey() {
        setKey('');
    }

    return (
        <div className="info-box">

            {/* props name & author/director values are used */}
              <h5>Name : {name}</h5>
              <h5>Author/Director : {author} {Director}</h5>
              <h5>{Key}</h5>

              {
                  !alter && <>
                            <h5>Key: {key}</h5>
                  </>
              }
              
              


              {/* alter: boolean conditional render value -- send from the upper/parent component */}
              {
                  alter && <>

                            {/* props function is used */}
                            {/* event handler button to show and hide values in render */}
                            <button onClick={()=>testFunc(props.datas)}>Add</button>
                            <button onClick={()=>showKey(key)}>Show Key</button>
                            <button onClick={()=>removeKey()}>Remove Key</button>
                            
                            
                            {/* a react router dynamic page routing parameter using Link */}
                            <Link to={`/detail/`+key}>
                                    <button>View Details</button>
                            </Link> 
                  </>
              }
              {
                  !alter && <>
                  
                            <Link to="/item">
                                <button>
                                    Back
                                </button>
                            </Link>
                            
                  </>
              }


              
        </div>
    );
};

export default Info;