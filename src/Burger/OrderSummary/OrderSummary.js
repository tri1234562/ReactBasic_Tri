import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';
class OrderSummary extends Component {

    

    componentWillUpdate(){
        console.log("ORDER SUMMARRY UPDATE!!");
    }

    render() {
        const x = Object.keys(this.props.ingredients)
            .map((namekey) => {
                return (
                    <li key={namekey}>{namekey}: {this.props.ingredients[namekey]} </li>
                );
            });

        return (
            <Aux>
                <h3>Your Order: </h3>
                <p> Your Burger Ingredients: </p>
                <ul>
                    {x}
                </ul>
                <p>Your ToTal: {this.props.total.toFixed(2)} $</p>
                <p>Do You Want To Continue Order?</p>

                <Button btnclick={this.props.btnCancel} type="Danger"> Cancel </Button>
                <Button btnclick={this.props.btnSubmit} type="Success"> Submit </Button>
            </Aux>
        )
    }
}






export default OrderSummary;