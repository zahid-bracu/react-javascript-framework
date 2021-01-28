import React from 'react';

const Total = (props) => {
    
    return (
        <div>
            {/* getting the props data length & print */}
           <h3 style={{color:"green"}}>Total Added: {props.keys}</h3>
           {
               props.children
           }
        </div>
    );
};

export default Total;