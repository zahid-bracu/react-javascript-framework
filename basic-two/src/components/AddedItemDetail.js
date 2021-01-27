import React from 'react';
import './style.css'
const AddedItemDetail = (props) => {
    const {name,author,Director,count,key}=props.data;
    return (
        <div className="info-box">
                <h5>Name : {name}</h5>
                <h5>Author/Director : {author} {Director}</h5>
                <h5>Total Ordered : {count}</h5>
                <button>Remove</button>
        </div>
    );
};

export default AddedItemDetail;