import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle/SideDrawerToggle'


const toolbar = (props) => (
    <header className="Toolbar">
        <SideDrawerToggle SDToggle={props.handleSideDrawer} />
        <div className="Logo">
            <Logo />
        </div>
        <nav className="Desktop-only">
            <NavigationItems isAuthen = {props.isAuthen} />
        </nav>
    </header>
)
export default toolbar;