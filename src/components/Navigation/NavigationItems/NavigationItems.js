import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem.js';
import './NavigationItems.css'
const NavigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active={true}> Button 1 </NavigationItem>
        <NavigationItem link="/"> Button 2 </NavigationItem>
    </ul>
)
export default NavigationItems;