import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../components/UI/Button/Button';
const OrderSummary = (props) => {

    const x = Object.keys(props.ingredients)
        .map((namekey) => {

            return (
                <li key={namekey}>{namekey}: {props.ingredients[namekey]} </li>
            );
        });
    return (
        <Aux>
            <h3>Your Order: </h3>
            <p> Your Burger Ingredients: </p>
            <ul>
                {x}
            </ul>
            <p>Your ToTal: {props.total.toFixed(2)} $</p>
            <p>Do You Want To Continue Order?</p>

            <Button btnclick={props.btnCancel} type="Danger"> Cancel </Button>
            <Button btnclick={props.btnSubmit} type="Success"> Submit </Button>
        </Aux>
    )
}

export default OrderSummary;