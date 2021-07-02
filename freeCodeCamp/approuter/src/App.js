
import Home from './component/Home';
import AboutMe from './component/AboutMe';
import Profile from './component/Profile';
import NavBar from "./component/NavBar";
import Random from './component/Random';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './component/NotFound';
function App() {
  return (
    <>
    {/* <BrowserRouter  basename='/home'> */}
    <BrowserRouter>
    <NavBar/>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/aboutme' component={AboutMe} />
      <Route path='/profile' component={Profile} />
      <Route path='/random' component={Random} />
      <Route  component={NotFound} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
