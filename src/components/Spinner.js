import React from 'react';
import { DotWave } from '@uiball/loaders'

function Spinner() {
    return (
        <div className="overlay">
            <DotWave color="white" size={47} />
        </div>
    )
}

export default Spinner;