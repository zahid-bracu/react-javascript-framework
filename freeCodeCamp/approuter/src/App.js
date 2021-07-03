import './App.css'
import Home from './component/Home';
import AboutMe from './component/AboutMe';
import Profile from './component/Profile';
import NavBar from "./component/NavBar";
import Random from './component/Random';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NotFound from './component/NotFound';
import Post from './component/Post';
import RandomPost from './component/RandomPost';
import LocationPost from './component/StringGen/LocationPost';
import { useState } from 'react';
import Login from './component/Login';
import LoginFirst from './component/LoginFirst';
function App() {
  const[loggedIn,setLoggedIn]=useState(false)
  return (
    <div className="App">
    {/* <BrowserRouter  basename='/home'> */}
    <BrowserRouter>
    <h1>The Ultimate React Router</h1>
    <NavBar/>
    <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/loginfirst' component={LoginFirst} />
      <Route path='/aboutme' component={AboutMe} />

      {/* Redirect Route */}
      <Route path='/profile' >
      {loggedIn ? <Profile/> : <Redirect to="/loginfirst" />}
      </Route>
      
      
      <Route path='/random' component={Random} />
      <Route path='/paramsmatch/:id' component={Post} />
      <Route path='/useparams/:id' component={RandomPost} />
      <Route path='/uselocation/:id' component={LocationPost} />
      <Route  component={NotFound} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
