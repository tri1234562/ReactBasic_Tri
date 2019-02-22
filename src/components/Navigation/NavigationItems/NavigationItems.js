import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.js';
import './NavigationItems.css'
const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/"> HOME </NavigationItem>
        <NavigationItem link="/orders"> ORDERS </NavigationItem>
    </ul>
)
export default NavigationItems;