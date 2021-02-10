import React, {useEffect,useState} from 'react';

const RandomUser = () => {
    const [user,setUser]=useState()
    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => setUser(json))
    }, [])

    console.log(user);
    return (
        <div style={{border:"2px solid black",width:"400px",display:"block",margin:"10px auto",background:"#d3ffb5"}}>
            <h1>Name :   {user && user.results[0].name.first} </h1>
            <h2>Email :  {user && user.results[0].email} </h2>
            {/* <hr/>
            <h2>Random User Name : {random.name}</h2> */}
        </div>
    );
};

export default RandomUser;