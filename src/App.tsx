import React, { useState } from 'react';
import './App.css'
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'
import { offShoreDecisionMaker } from './Utils/Operations'
import { calcData } from './interfaces/calcData'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container,Button } from 'react-bootstrap';

let calcHist: calcData[] = [];

function App(): JSX.Element  {
  const [workingTotal, setWorkingTotal] = useState<string>("");
  const [calculatingTotal, setCalculatingTotal] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [calcDisp, setCalcDisp] = useState<string>("");

  let newObj: calcData;

  let calcWorkingData: calcData = {
    workingTotal,
    calculatingTotal,
    operation
  }

  const handleInput = (input: string) => {

    calcWorkingData = offShoreDecisionMaker(input, calcWorkingData); // passing calcData to manipulate calculator data based on input

    if (input === "AC") { // clear all variables if AC pressed
      setCalculatingTotal("");
      setWorkingTotal("");
      setOperation("");
      calcWorkingData.workingTotal = "";
      calcWorkingData.calculatingTotal = "";
      calcWorkingData.operation = "";
      setCalculatingTotal("");
    } else if (input === "C") { // clear workingTotal on C pressed
      setWorkingTotal(""); 
      calcWorkingData.workingTotal = "";
    } 

    setWorkingTotal(calcWorkingData.workingTotal);         //
    setOperation(calcWorkingData.operation);               // updating calculator data after offShore manipulation 
    setCalculatingTotal(calcWorkingData.calculatingTotal); // 
    console.log(calcWorkingData);
    setCalcDisp(calcWorkingData.calculatingTotal+calcWorkingData.operation+calcWorkingData.workingTotal); // building calc display string

    calcHist.push(calcWorkingData);
    console.log(calcHist)
    }

    // React; what a wild ride

  return (
    <div className="body">
      <div className="App">
          <Display calcSays = {calcDisp}></Display>
          <Buttons newInput = {handleInput} ></Buttons>
      </div>
    </div>
  );
}


export default App;
