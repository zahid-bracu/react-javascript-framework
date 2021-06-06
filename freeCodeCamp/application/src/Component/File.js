import React from 'react';
import './style.css';


const File = () => {
 var x =10;
 return (
  <>
  <Title/>
   <h1>Hello World</h1>
   <h2>{x}</h2>
   <Computer pentium={3} monitor="Dell" />
   <FileTest/>
   <Image/>
   <Footer/>
  </>
 );
};


const Computer = (props)=> <h3 className='degree'>Testing Computer Pentium : {props.pentium} & Monitor : {props.monitor}</h3>

const FileTest = () => {
 return <h6>Testing</h6>
};


const Title = ()=> <h3>This is a Title</h3>;
const Footer = () => <h4 style={{background:"green"}}>This is Footer</h4>;

const Image = () => <img src='https://i.ibb.co/3BW3DXz/Anna-Ivanova-Beetroot-soup-with-mint-chia-flax-pumpkin-seeds.jpg' width='200' height='200' />

export default File;