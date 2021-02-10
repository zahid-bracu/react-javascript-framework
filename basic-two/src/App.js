//importing react + use-state + create-context for context api
import  React, {useState, createContext} from 'react'
//import css file
import './App.css';

//importing components
import Navigation from './components/Navigation';
import DataLoad from './components/DataLoad';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Detail from './components/Detail';
import AddedItem from './components/AddedItem';


//importing react router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Test from './components/Test';
import Contact from './components/Contact';
import Somewhere from './components/Somewhere';
import SubmittedInfo from './components/SubmittedInfo';
import User from './components/User';
import RandomUser from './components/RandomUser';


export const CategoryContext = React.createContext();

function App() {
  const [state,setState]=useState(0)
  const [category,setCategory]=useState();


  return (
    <CategoryContext.Provider value={[category,setCategory]}>
    <div className="App">
      {/* router */}
      <Router>
      <Navigation state={state}/>
        {/* switch */}
        <Switch>

          {/* path & router */}
          <Route path="/item">
            <DataLoad state={state} setState={setState}></DataLoad>
          </Route>


          
          <Route path="/home">
            <Home></Home>
          </Route>


          <Route path="/random">
            <RandomUser/>
          </Route>


          <Route path="/submit">
            <SubmittedInfo/>
          </Route>


          <Route path="/user">
            <User/>
          </Route>


          <Route path="/test">
            <Test></Test>
          </Route>


          <Route path="/contact">
            <Contact/>
          </Route>


          <Route path="/addedItems">
            <AddedItem/>
          </Route>


          <Route path="/somewhere">
            <Somewhere/>
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
    </CategoryContext.Provider>
  );
}

export default App;
