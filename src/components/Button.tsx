import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const Button = (props: {val: string,inputFromBtn: (incomingInput: string) => void}): JSX.Element => {

    return (
        <button className="calculatorButton" onClick={()=>props.inputFromBtn(props.val)}> {props.val} </button>
    );
}