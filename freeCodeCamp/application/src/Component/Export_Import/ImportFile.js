import React from 'react';
import testFunc from './ExportFile'; //importing default function 
import {xy,info} from './ExportFile'; // importing variable and array of object

const ImportFile = () => {
 return (
  <>
    <h3>{xy}</h3>
    <button onClick={testFunc}>Test Press</button> 
  </>
 );
};

export default ImportFile;