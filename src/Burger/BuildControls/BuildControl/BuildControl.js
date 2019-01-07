import React from 'react';
import './BuildControl.css';

const buildcontrol = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button onClick={props.addcontrols} className="More"> More </button>
        <button onClick={props.delcontrols} className="Less"> Less </button>
    </div>
);

export default buildcontrol;