import React, { Component } from 'react';
import './Modal.css';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
class modal extends Component {

    shouldComponentUpdate(nextProps,nextState) {
        // console.log(nextProps); // Mo 2 dong code nay de hieu gia tri cua nextProps
        // console.log(this.props.Show);
        return (nextProps.Show !== this.props.Show || nextProps.children !== this.props.children); // ve truoc la tranh viec update lien tuc khong can thiet trong modal -- ve sau la de submit cai Order no load cai spinner
        // ve sau co the su dung  nextProps.loaded !== this.props.loaded
    }
    componentWillUpdate() {
       
    }

    render() {
        return (
            <Aux>
                <BackDrop show={this.props.Show} clickedBD={this.props.clickedBD2} />
                <div
                    className="Modal"
                    style={{
                        transform: this.props.Show ? 'translateY(0)' : 'translateY(-50vh)',
                        opacity: this.props.Show ? '1' : '0',
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default modal;