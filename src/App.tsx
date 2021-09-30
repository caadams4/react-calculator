import React, { useState } from 'react';
import './App.css'
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'
import { offShoreDecisionMaker } from './Utils/Operations'
import { calcData } from './interfaces/calcData'



let calcHist: calcData[] = [];



function App(): JSX.Element  {
  const [workingTotal, setWorkingTotal] = useState<string>("");
  const [calculatingTotal, setCalculatingTotal] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [calcDisp, setCalcDisp] = useState<string>("");

  let newObj: calcData;

  const calcWorkingData: calcData = {
    workingTotal,
    calculatingTotal,
    operation
  }

  const handleInput = (input: string) => {

    if (input !== "<-") {
      newObj = offShoreDecisionMaker(input, calcWorkingData); // passing calcData to manipulate calculator data based on input
    } else {
      calcHist.pop();
      let lastStepCalcData = calcHist.pop();
      console.log(lastStepCalcData);
    }
    if (input === "AC") { // clear all variables if AC pressed
      setCalculatingTotal("");
      setWorkingTotal("");
      setOperation("");
      newObj.workingTotal = "";
      newObj.calculatingTotal = "";
      newObj.operation = "";
      setCalculatingTotal("");
    } else if (input === "C") { // clear workingTotal on C pressed
      setWorkingTotal("");
      newObj.workingTotal = "";
    } 

    setWorkingTotal(newObj.workingTotal);         //
    setOperation(newObj.operation);               // updating calculator data after offShore manipulation 
    setCalculatingTotal(newObj.calculatingTotal); // 
    console.log(newObj);
    setCalcDisp(newObj.calculatingTotal+newObj.operation+newObj.workingTotal); // building calc display string

    calcHist.push(newObj);
    console.log(calcHist)
    }


    // React; what a wild ride

  return (
    <div className="App">
      <div>
          <Display calcSays = {calcDisp}></Display>
          <Buttons newInput = {handleInput} ></Buttons>
      </div>
    </div>
  );
}


export default App;
