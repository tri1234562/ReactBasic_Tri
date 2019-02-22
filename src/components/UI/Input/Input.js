import React from 'react';
import './Input.css';

const Input = (props) => {

    let inputElement = null;
    switch(props.ElementType)
    {
        case('input'):
            inputElement = <input className={props.Error? 'error inputContent' : 'inputContent'}  onChange={props.Changed} {...props.ElementConfig} value={props.value} />;
            break;
        
        case('textarea'):
            inputElement = <textarea onChange={props.Changed} className="inputContent" {...props.ElementConfig} value={props.value} />;
            break;
        case('select'):
            inputElement = <select value={props.value} onChange={props.Changed}> {props.ElementConfig.option.map((item) => {         
                    return(
                        <option value={item.value}>{item.displayValue}</option>
                    )
                })} 
            </select>;
            break;
        default:
            inputElement = <input className="inputContent"  {...props.ElementConfig} value={props.value} />     
    };
    return (
        <div className="inputElement">
            <label>{props.Label}</label>
            {inputElement}
        </div>
    );
    
};

export default Input