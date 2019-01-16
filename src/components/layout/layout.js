import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        openBD: false,
        mobi: true,
    }
    OnHandleBD = () => {
        this.setState({ openBD: false });
        console.log(this.state.openBD);
    }

    onHandleSideDrawer = () => {
        console.log(this.state.openBD);
        this.setState((prevState) => {
            return { openBD: !prevState.openBD };
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar handleSideDrawer={this.onHandleSideDrawer} />
                <SideDrawer open={this.state.openBD} close={this.OnHandleBD} mobiMode={this.state.mobi} />
                <main className="Content"> {this.props.children} </main>
            </Aux>
        )
    }
}



export default Layout;
