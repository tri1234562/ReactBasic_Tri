import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import BackDrop from '../UI/BackDrop/BackDrop';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {

    state={
        openBD:true,
    }
    OnHandleBD=() => {
        this.setState.openBD = false;
    }
    render() {
        return (
            <Aux>
                <BackDrop show={this.state.openBD} clickedBD={this.OnHandleBD}/>
                <Toolbar />
                <SideDrawer />
                <main className="Content"> {this.props.children} </main>
            </Aux>
        )
    }
}



export default Layout;
