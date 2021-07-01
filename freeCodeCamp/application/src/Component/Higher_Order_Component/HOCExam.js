import React, { Component } from 'react';

class HOCExam extends Component {
  state={
   count:0
  }


  increament=()=>{
   this.setState((prevState)=>({
    count:prevState.count+1
   }))
  }
 
 render() {
  const {count}=this.state;
  return (
   <div>
    <h1>{count}</h1>
    <button onClick={this.increament}>Button has been clicked {count} times</button>
   </div>
  );
 }
}


export default HOCExam;