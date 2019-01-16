import React from 'react';
import './Button.css'
const Button = (props) => {
    return(
        <button disabled={props.disabled} className={['Button',props.type].join(' ')} onClick={props.btnclick}> {props.children} </button>
    );
}

export default Button;