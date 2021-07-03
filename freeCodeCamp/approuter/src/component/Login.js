import React from 'react';

const Login = ({loggedIn,setLoggedIn}) => {
 return (
  <div>
   <button onClick={()=>setLoggedIn(!loggedIn)}>{loggedIn ? 'Logout' : 'Login'}</button>
  </div>
 );
};

export default Login;