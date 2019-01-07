import React from 'react';
import './BackDrop.css'
const backdrop = (props) => (
    props.show? <div className="BackDrop" onClick={props.clickedBD}></div>:null
)
export default backdrop;