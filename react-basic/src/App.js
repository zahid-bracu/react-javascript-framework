import logo from './logo.svg';
import './App.css';

function App() {
  // variable
  var sentece="This is testing React Site.This line saved in a variable"

  // objects
  const info={
    motive:"Testing going on.this line is saved inside a object",
    id:15101122
  }


  // css style
  const style={
    color:'red'
  }
  return (
    <div className="App">
      {/* style -variable  */}
      <h2 style={style}>{sentece}</h2>
      
      {/* object variable & inline color */}
      <h3 style={{color:"green"}}>{info.motive}</h3>


      {/* other component importing 3 times */}
      <Components></Components>
      <Components></Components>
      <Components></Components>
    </div>
  );
}


function Components(){
  const style={
    border:"1px solid black",
    padding:"10px",
    width:"400px",
    margin:"auto"
  }
  return(
    <h1 style={style}>This is an Component</h1>
  )
}

export default App;
