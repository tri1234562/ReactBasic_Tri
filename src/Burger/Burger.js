import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.js';
import './Burger.css';

class Burger extends Component {


    render() {
        let receiveIngredients = Object.keys(this.props.rootIngredients)
            .map((wtf) => {
                // console.log(this.props.rootIngredients[wtf]);
                // console.log([...Array(this.props.rootIngredients[wtf])]); // muốn hiểu rõ hơn thì mở code khúc này ra mà coi console
                return [...Array(this.props.rootIngredients[wtf])]
                    .map((_, i) => {
                        return <BurgerIngredients type={wtf} key={wtf + i} />;
                    })
            }).reduce((newarray, items) => {
                return newarray.concat(items);
            }, []);
        if(receiveIngredients.length === 0)
        {
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
export default Burger;
