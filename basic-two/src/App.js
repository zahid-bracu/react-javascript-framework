import './App.css';
import Navigation from './components/Navigation';
import DataLoad from './components/DataLoad';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Detail from './components/Detail';

//importing react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Navigation/>
       

      {/* router */}
      <Router>

        {/* switch */}
        <Switch>

          {/* path & router */}
          <Route path="/item">
            <DataLoad></DataLoad>
          </Route>


          
          <Route path="/home">
            <Home></Home>
          </Route>

          {/* default path */}
          <Route exact path="/">
            <Home></Home>
          </Route>

          {/* dynamic route path with dynamic key value */}
          <Route path='/detail/:key'>
            <Detail></Detail>
          </Route>

          


          {/* not found path */}
          <Route path="*">
            <Notfound/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
