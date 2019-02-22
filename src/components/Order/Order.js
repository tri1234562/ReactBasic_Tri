import React from 'react';
import './Order.css';

const order = (props) => {
    const x = Object.keys(props.ingredientsOrder).map(item => {
        return (
            <span key={item} className="ingreOrder"> {item}  <strong>({props.ingredientsOrder[item]})</strong></span>
        )
    })
    
    const tien = parseFloat(+props.priceOrder).toFixed(2);
    return (
        <div className="order">
            <p>This Is Ingredients Of Order: {x}</p>
            <p>TotalPrice: <strong> {tien} $</strong></p>
        </div>
    )
}

export default order;