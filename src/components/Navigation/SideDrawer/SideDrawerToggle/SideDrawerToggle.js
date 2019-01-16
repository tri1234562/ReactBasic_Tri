import React from 'react';
import './SideDrawerToggle.css';
const SideDrawerToggle = (props) => (
    <div className="SideDrawerToggle" onClick={props.SDToggle}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
)

export default SideDrawerToggle;