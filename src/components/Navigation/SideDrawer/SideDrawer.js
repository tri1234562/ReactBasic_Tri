import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
import './SideDrawer.css';

const SideDrawer = (props) => {
    let classSideDrawer = ["SideDrawer", "Close"];
    if(props.open)
    {
        classSideDrawer = ["SideDrawer" , "Open"];
    }
    return (
        <Aux>
            <BackDrop show={props.open} clickedBD={props.close} mobiBD={props.mobiMode}/>
            <div className= {classSideDrawer.join(' ')}>
                <div className="Logo1">
                    <Logo />
                </div>
                
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;