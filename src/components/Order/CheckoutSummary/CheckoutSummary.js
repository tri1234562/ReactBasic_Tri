import React from 'react';
import Burger from '../../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const CheckoutSummary = (props) => {

    
        
    
    return(
        <div className="CheckoutSummary">
          
            <h2> This Is Your Burger You Are Selected</h2>
            <div style={{width:'100%', margin:'auto'}}>
            <Burger rootIngredients={props.ingredients} />
            </div>
            <Button type="Danger" btnclick={props.clickBack}> CanCel </Button>
            <Button type="Success" btnclick={props.submitOrder}> Submit </Button>
        </div>
    )
}

export default CheckoutSummary;