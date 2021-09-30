import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const EqualsButton = (props: {val: string,inputFromBtn: (incomingInput: string) => void}): JSX.Element => {

    return (
        <button className="equalsButton" onClick={()=>props.inputFromBtn(props.val)}> {props.val} </button>
    );
}