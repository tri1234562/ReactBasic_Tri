import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (
    <header className="Toolbar">
        <div> header </div>
        <div className="Logo">
            <Logo />
        </div>
        <nav className="Desktop-only">
           <NavigationItems />
        </nav>
    </header> 
)
export default toolbar;