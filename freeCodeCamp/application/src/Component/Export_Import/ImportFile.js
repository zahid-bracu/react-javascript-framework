import React from 'react';
import testFunc from './ExportFile';
import {xy,info} from './ExportFile';

const ImportFile = () => {
 return (
  <>
    <h3>{xy}</h3>
    <button onClick={testFunc}>Test Press</button> 
  </>
 );
};

export default ImportFile;