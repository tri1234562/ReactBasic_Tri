import React, { Component } from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'
import Button from '../../components/UI/Button/Button.js';

class BuildControls extends Component {
    render() {
        const control = [
            { label: 'Salad', type: "salad" },
            { label: 'Meat', type: "meat" },
            { label: 'Bacon', type: "bacon" },
            { label: 'Cheese', type: "cheese" },
        ]
        let total = this.props.total.toFixed(2);
        console.log(this.props.orderbtn);
        return (
            <div className="BuildControls">
                {control.map(item => {
                    return (
                        <BuildControl
                            label={item.label}
                            key={item.type}
                            addcontrols={() => { this.props.addbuilder(item.type) }}
                            delcontrols={() => { this.props.delbuilder(item.type) }}
                        />
                        
                    )
                })}
                <h3> Total Price {total} $ </h3>
                <Button btnclick={this.props.Modal} disabled={!this.props.orderbtn} type="OrderButton"> Order Burger </Button>
            </div>
        )
    }
}

export default BuildControls;