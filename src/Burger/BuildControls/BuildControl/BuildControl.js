import React from 'react';
import './BuildControl.css';
import Button from '../../../components/UI/Button/Button.js';
const buildcontrol = (props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <Button btnclick={props.addcontrols} type="More"> More </Button>
        <Button btnclick={props.delcontrols} type="Less"> Less </Button>
    </div>
);

export default buildcontrol;