// this file is the demonstration of props
import React from 'react';

const Props_File = () => {
 
 // Array of Object
const data=[
 {
  name:"zahid",
  id:14101122,
 },
 {
  name:"Spooky",
  id:15101122
 }
]


 return (
  <>


  {/* 1 */}
  <OtherComponent title="Other Component" value={120}/>


  {/* 2 */}
  <PropsComponent heading='welcome to your life' counter={300}/>


  {/* 3 */}
  <DestructureComponent header="Header of The World" id={420} />


  <h2>List</h2>
  {/* 4 */}
  {
    data.map(key=> <ObjectComponent info={key}/>)
  }
  

  </>
 );
};


// example one 
const OtherComponent=(props)=>{
 return(
  <>
  <h3>Title : {props.title}</h3>
  <h2>Value :  {props.value}</h2>
  </>
 )
}


// example two
const DestructureComponent = (props) =>{
 const {header,id}=props;
 return(
  <>
  <h3>Header : {header}</h3>
  <h2>ID : {id}</h2>
  </>
 )
}


// example three
const PropsComponent = ({heading,counter})=>{
 return(
  <>
  <h3>HEADING : {heading}</h3>
  <h2>Counter : {counter}</h2>
  </>
 )
}

// example four
const ObjectComponent=(props)=>{
 const {name, id}=props.info;
 return(
  <>
  
   <h4>{id} : {name}</h4>
  </>
 )
}
export default Props_File;