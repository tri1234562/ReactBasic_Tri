import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.js';
import {withRouter} from 'react-router-dom';
import './Burger.css';

class Burger extends Component {


    render() {
        console.log(this.props);
        let receiveIngredients = Object.keys(this.props.rootIngredients)
            .map((wtf) => {
                // console.log(this.props.rootIngredients[wtf]);
                // console.log([...Array(this.props.rootIngredients[wtf])]); // muốn hiểu rõ hơn thì mở code khúc này ra mà coi console
                return [...Array(this.props.rootIngredients[wtf])]
                    .map((_,i) => { // no se tra ve 2 object gom 2 phan la undefined , value , -> _ truoc de lay dc value
                        return <BurgerIngredients type={wtf} key={wtf + i} />;
                    })
            }).reduce((newarray, items) => {
                return newarray.concat(items);
            }, []);
        if(receiveIngredients.length === 0)
        {
            console.log(receiveIngredients);
            receiveIngredients = <p className="note"> Please Add Some Ingredients For Your Burger, It's Empty Now!! </p>
        }
        
        return (
            <div className="Burger">
                <BurgerIngredients type="bread-top" />
                {receiveIngredients}
                <BurgerIngredients type="bread-bottom" />
            </div>
        )
    }
}
export default withRouter(Burger);
