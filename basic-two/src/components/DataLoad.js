import React, {useState} from 'react';

//importing Info component
import Info from './Info';

// loading the own data
import ownData from './ownData';

// importing Total component
import Total from './Total';

const DataLoad = () => {

    //key value saving
    const [keys,setKeys]=useState([]);

    // slicing the own data to 10 item
    var loadedData=ownData.slice(0,10);

    // setting the all data into use state
    const [data, setdata] = useState(loadedData);

    // a function to send through prop
    function  testFunc(key){
        console.log("Clicked Once");
        console.log(key);
        var newKeys=[...keys,key]
        setKeys(newKeys);
    }

    


    return (
        <>
        {/* keys value are passing using props  */}
        <div>
            <Total keys={keys}/>
        </div>

        <div>
            {
                // passing data from one component to another
                // key must be passed
                // alter: a conditional boolean render value is sent to show some button
                data.map(pd=> <Info alter={true} testFunc={testFunc} key={pd.key} datas={pd} ></Info>)
            }          
        </div>

        
        </>
    );
};

export default DataLoad;