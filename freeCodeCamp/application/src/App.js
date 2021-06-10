import './App.css';
import Props_File from './Component/Props/Props_File'
import React from 'react';
import Props_Children from './Component/Props/Props_Children';
import SimpleList from './Component/List/SimpleList';
import ProperList from './Component/List/ProperList';
import OnClick from './Component/EventBasic/OnClick';
import ImportFile from './Component/Export_Import/ImportFile';
import FileUseState from './Component/UseState/FileUseState';
import ArrayState from './Component/UseState/ArrayState';
import ObjectState from './Component/UseState/ObjectState';
function App() {
  return (
    <React.Fragment>
      <Props_File/>
      <Props_Children/>
      <SimpleList/>
      <ProperList/>
      <OnClick/>
      <ImportFile/>
      <FileUseState/>
      <ArrayState/>
      <ObjectState/>
    </React.Fragment>
  );
}

export default App;
