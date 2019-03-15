import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import './layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import { connect } from 'react-redux';
// import * as Actions from '../../Store/actions/indexActions';
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
                <Toolbar isAuthen = {this.props.isAuthen} handleSideDrawer={this.onHandleSideDrawer} />
                <SideDrawer open={this.state.openBD} close={this.OnHandleBD} mobiMode={this.state.mobi} />
                <main className="Content"> {this.props.children} </main>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthen : state.AR.Token !== null,
    }
}

export default connect(mapStateToProps)(Layout);
