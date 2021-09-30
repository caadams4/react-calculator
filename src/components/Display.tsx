
import React, { useState } from 'react';
import { Screen } from '../interfaces/Screen'



export const Display = ({calcSays}: {calcSays: string}): JSX.Element =>  {
    return (
        <div className="calculatorDisplay">
            {calcSays}
        </div>
    )

}