import React from 'react';
import PropTypes from 'prop-types';

const defaultImage='https://i.ibb.co/5rnZHCX/laptop.png';

const PropsTypeExam = () => {
 return (
  <div>
   <ChildrenFunction name='Spooky' id={420} />  
  </div>
 );
};

export default PropsTypeExam;


const ChildrenFunction=({name,id,image})=>{
 return(
  <>
  <h1>{name} : {id}</h1>
  < img src={image} style={{maxWidth:"200px"}}/>
  </>
 )
}


ChildrenFunction.propTypes={
 name:PropTypes.string.isRequired ,
 id:PropTypes.number.isRequired,
 image:PropTypes.object
}


ChildrenFunction.defaultProps={
 name:'Creep' ,
 id:421,
 image:defaultImage
}