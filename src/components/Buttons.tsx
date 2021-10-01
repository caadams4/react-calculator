import React, { useState } from 'react';
import { Button } from './Button';


export const Buttons = (props: {newInput: (incomingInput: string) => void}): JSX.Element => {

    return (
    <div>
            <div className="calcRow">
                <Button val = "AC" inputFromBtn = {props.newInput}/>  
                <Button val = "C" inputFromBtn = {props.newInput}/> 
                <Button val = "<-" inputFromBtn = {props.newInput}/>
                <Button val = "=" inputFromBtn = {props.newInput}/>  
  
            </div>
            <div className="calcRow">
                <Button val = "9" inputFromBtn = {props.newInput}/>  
                <Button val = "8" inputFromBtn = {props.newInput}/>  
                <Button val = "7" inputFromBtn = {props.newInput}/>  
                <Button val = "*" inputFromBtn = {props.newInput}/>  
            </div>
            <div className="calcRow">
                <Button val = "6" inputFromBtn = {props.newInput}/>  
                <Button val = "5" inputFromBtn = {props.newInput}/>  
                <Button val = "4" inputFromBtn = {props.newInput}/>  
                <Button val = "/" inputFromBtn = {props.newInput}/>  
            </div>
            <div className="calcRow">
                <Button val = "3" inputFromBtn = {props.newInput}/>  
                <Button val = "2" inputFromBtn = {props.newInput}/>  
                <Button val = "1" inputFromBtn = {props.newInput}/>  
                <Button val = "+" inputFromBtn = {props.newInput}/>  
            </div>
            <div className="calcRow">
                <Button val = "(-)" inputFromBtn = {props.newInput}/>  
                <Button val = "0" inputFromBtn = {props.newInput}/>  
                <Button val = "." inputFromBtn = {props.newInput}/>  
                <Button val = "-" inputFromBtn = {props.newInput}/>  
            </div>
        </div>
    );
}   

