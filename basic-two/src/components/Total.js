import React from 'react';

const Total = (props) => {
    
    return (
        <div>
            {/* getting the props data length & print */}
           <h3 style={{color:"green"}}>Total Added: {props.keys.length}</h3> 
        </div>
    );
};

export default Total;