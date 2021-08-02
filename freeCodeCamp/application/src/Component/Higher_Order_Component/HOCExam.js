import React, {useState} from 'react';
import './style.css';
function HOCExam() {
  return (
    <>
      <HOCFunctionOne cmp={ChildOne}/>
      <HOCFunctionTwo cmp={ChildOne}/>
    </>
  )
}


// higher order component function
//that takes other component as input and give the component as output as do some custom things
const HOCFunctionOne=(props)=>{
  return(
    <>
      <h2 style={{color:"red",textAlign:"center"}}>  <props.cmp>Red</props.cmp></h2>
    </>
  )
}


// second HOC Function
const HOCFunctionTwo=(props)=>{
  return(
    <>
      <h2 style={{color:"green",textAlign:"center"}}><props.cmp/></h2>
    </>
  )
}

const ChildOne=()=>{
  const [state, setstate] = useState(0);
  return(
    <>
    <div className="box ">
    <h6>Child  Component</h6>
    <h5>{state}</h5>
      <button onClick={()=>setstate(state+1)}>Click</button>
    </div>
    </>
  )
}


export default HOCExam;