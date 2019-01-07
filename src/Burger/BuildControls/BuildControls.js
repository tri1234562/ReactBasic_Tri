import React, { Component } from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css'

class BuildControls extends Component {
    render() {
        const control = [
            { label: 'Salad', type: "salad" },
            { label: 'Meat', type: "meat" },
            { label: 'Bacon', type: "bacon" },
            { label: 'Cheese', type: "cheese" },
        ]
        let total = this.props.total.toFixed(2);
        
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
                <button onClick={this.props.Modal} disabled={!this.props.orderbtn} className="OrderButton"> Order Burger </button>
            </div>
        )
    }
}

export default BuildControls;