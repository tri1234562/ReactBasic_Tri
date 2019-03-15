import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.js';
import './NavigationItems.css';
import Aux from '../../../hoc/Aux';
const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/"> HOME </NavigationItem>
        {props.isAuthen ? 
        <Aux><NavigationItem link="/orders"> ORDERS </NavigationItem> 
        <NavigationItem link="/logout"> Logout </NavigationItem></Aux> : 
        <NavigationItem link="/auth"> Authentication </NavigationItem> }
        
    </ul>
)
export default NavigationItems;