import React from 'react';
import './NavigationItem.scss';
const NavigationItem = (props) => {
    return (
        <li className="NavigationItem">
            <a href="#abc" link={props.link} className={props.active ? "active" : ""}> {props.children} </a>
        </li>
    )
}
export default NavigationItem;