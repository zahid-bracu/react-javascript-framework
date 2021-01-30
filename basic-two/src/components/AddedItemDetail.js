import React from 'react';
import './style.css' //importing css external file
const AddedItemDetail = (props) => {

    // destructure props value
    const {name,author,Director,count,key}=props.data;
    const {remove}=props;
    


    
    return (
        <div className="info-box">
            {/* destructure Variable value */}
                <h5>Name : {name}</h5>
                <h5>Author/Director : {author} {Director}</h5>
                <h5>Total Ordered : {count}</h5>

                {/* destructure function */}
                <button onClick={()=>remove(key)}>Remove</button>
        </div>
    );
};

export default AddedItemDetail;