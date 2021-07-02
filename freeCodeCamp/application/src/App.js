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
import SimpleCount from './Component/UseState/SimpleCount';
import UseEffectBasic from './Component/UseEffect/UseEffectBasic';
import UseEffectOnClick from './Component/UseEffect/UseEffectOnClick';
import UseEffectConditional from './Component/UseEffect/UseEffectConditional';
import UseEffectSecondParams from './Component/UseEffect/UseEffectSecondParams';
import UseEffectSecondParamsValue from './Component/UseEffect/UseEffectSecondParamsValue';
import UseEffectCleanup from './Component/UseEffect/cleanup/UseEffectCleanup';
import UseEffectFetch from './Component/UseEffect/UseEffectFetch';
import UseEffectMultipleReturns from './Component/UseEffect/UseEffectMultipleReturns';
import ShortCircuit from './Component/Short_Circuit_Evaluation/ShortCircuit';
import Component from './Component/Custom_Hook/Component';
import NestedComponent from './Component/Nested_Component/NestedComponent';
import Book_Project from './Component/Nested_Component/Mini_Book_Project/Book_Project';
import JavaScript_jsx from './Component/JSX_Javascript/JavaScript_jsx';
import FunctionalValueChange from './Component/UseState/FunctionalValueChange';
import JSX_Short_Circuit from './Component/Short_Circuit_Evaluation/JSX_Short_Circuit';
import TernaryOp from './Component/Ternary/TernaryOp';
import ShowHide from './Component/Show_Hide/ShowHide'
import OnBlur from './Component/React_Form/OnBlur';
import OnChange from './Component/React_Form/OnChange';
import AddItem from './Component/React_Form/AddItem';
import UseRefs from './Component/Use Ref/UseRefs';
import UseReducerExam from './Component/Use_Reducer/UseReducerExam';
import RestaurantContextProvider from './Component/Context_api/RestaurantContextProvider';
import Tester from './Component/Context_api/Tester';
import UseReducerPayload from './Component/Use_Reducer/UseReducerPayload';
import PropsTypeExam from './Component/PropsType/PropsTypeExam';
import ReactMemoExam from './Component/React_Memo/ReactMemoExam';
import UseMemoExam from './Component/Use_Memo/UseMemoExam';
import UseCallBackExam from './Component/Use_CallBack/UseCallBackExam';
import HOCExam from './Component/Higher_Order_Component/HOCExam';
function App() {
  return (
    <RestaurantContextProvider>
      <h1 style={{textAlign:'center'}}>React Testing</h1>
    <React.Fragment>
      <div style={{display:"none"}}>
      <Props_File/>
      <Props_Children/>
      <SimpleList/>
      <ProperList/>
      <OnClick/>
      <ImportFile/>
      <FileUseState/>
      <ArrayState/>
      <ObjectState/>
      <SimpleCount/>
      <UseEffectBasic/>
      <UseEffectOnClick/>
      <UseEffectConditional/>
      <UseEffectSecondParams/>
      <UseEffectSecondParamsValue/>
      <UseEffectCleanup/>
      <UseEffectFetch/>
      <UseEffectMultipleReturns/>
      <Component/>  
      <NestedComponent/>
      <Book_Project/>
      <JavaScript_jsx/>
      <FunctionalValueChange/>
      <JSX_Short_Circuit/>
      <ShortCircuit/>
      <TernaryOp/>
      <ShowHide/>
      <OnBlur/>
      <OnChange/>
      <AddItem/>
      <UseRefs/>
      <UseReducerExam/>
      <Tester/>
      <UseReducerPayload/>
      <PropsTypeExam/>
      <ReactMemoExam/>
      <UseMemoExam/>
      <UseCallBackExam/>
      <HOCExam/>
      </div>
    </React.Fragment>
    </RestaurantContextProvider>
  );
}

export default App;
