import React,{useEffect,useState} from 'react';

const SingleUser = () => {
    const [userInfo,setUserInfo]=useState();
     
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => setUserInfo(data));



        // fetch('https://randomuser.me/api/')
        // .then(response => response.json())
        // .then(data => setRandom(data));
    }, [])

    console.log(userInfo)

    // console.log(random)
   
    return (
        <div style={{border:"2px solid black",width:"400px",display:"block",margin:"10px auto",background:"#d3ffb5"}}>
            <h1>Name : {userInfo && userInfo.name}</h1>
            <h2>Email : {userInfo && userInfo.email}</h2>
            {/* <hr/>
            <h2>Random User Name : {random.name}</h2> */}
        </div>
    );
};

export default SingleUser;