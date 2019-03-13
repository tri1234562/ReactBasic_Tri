import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.js';
import './NavigationItems.css'
const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/"> HOME </NavigationItem>
        <NavigationItem link="/orders"> ORDERS </NavigationItem>
        <NavigationItem link="/auth"> Authentication </NavigationItem>
    </ul>
)
export default NavigationItems;