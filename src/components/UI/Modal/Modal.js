import React from 'react';
import './Modal.css';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Aux';
const modal = (props) => {
    console.log(props.Show);
    return (
        <Aux>
            <BackDrop show={props.Show} clickedBD={props.clickedBD2} />
            <div
                className="Modal"
                style={{
                    transform: props.Show ? 'translateY(0)' : 'translateY(-50vh)',
                    opacity: props.Show ? '1' : '0',
                }}
            >
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;