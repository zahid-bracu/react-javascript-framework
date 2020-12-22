import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne'; //importing a component
import PageTwo from './components/PageTwo'; //importing a component

function App() {
  // variable
  var sentece="This is testing React Site.This line saved in a variable"

  // objects
  const info={
    motive:"Testing going on.this line is saved inside a object",
    id:15101122
  }


  // css style as object
  const style={
    color:'red'
  }


  // main part
  return (
    <div className="App">


      {/*  css style object   & variable value  */}
      <h2 style={style}>{sentece}</h2>
      
      {/* object value & inline color */}
      <h3 style={{color:"green"}}>{info.motive}</h3>


      {/* other component importing 3 times */}
      {/* props value is passing */}
      <Components value="Component 1"></Components>
      <Components value="Component 2"></Components>
      <Components value="Component 3"></Components>

      {/* other component from another folder is imported */}
      <PageTwo/>
      <PageOne/>
      
    </div>
  );
}


function Components(props){

  // props pringint
  console.log(props)
  const style={
    border:"1px solid black",
    padding:"10px",
    width:"400px",
    margin:"auto",
    background:"#c4ffcb"
  }
  return(

    // props value is show
    <h1 style={style}>This is an {props.value}  </h1>
  )
}

export default App;
