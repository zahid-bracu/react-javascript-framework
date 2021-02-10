import React from 'react';
import {
    useHistory
} from 'react-router-dom';

const Test = (props) => {
    console.log(props);

    const history=useHistory();

    const location={
        pathname:'/somewhere',
        state: { fromDashboard: true }
    }

    function goSomeWhere() {
        history.replace(location);
    }

    return (
        <div>
            <h1>Test Page </h1>
            <button onClick={()=>goSomeWhere()}>Go to Some where</button>
        </div>
    );
};

export default Test;