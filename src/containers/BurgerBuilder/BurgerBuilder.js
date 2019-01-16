import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
const ListPrice = {
    meat: 1,
    bacon: 2,
    salad: 0.5,
    cheese: 1.6,
};

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0,
        },
        totalprice: 0,
        orderbtn: false,
        purcharing: false,
    }
    addIngredient = (type) => {
        console.log(type);
        let updateingredient = { ...this.state.ingredients };
        updateingredient[type] = this.state.ingredients[type] + 1;
        let oldprice = this.state.totalprice;
        let updateprice = oldprice + ListPrice[type];
        this.setState({ ingredients: updateingredient, totalprice: updateprice });
        this.updatePurchase(updateingredient);
    }

    delIngredients = (type) => {
        let updateingredient = { ...this.state.ingredients };
        let oldprice = this.state.totalprice;
        if (updateingredient[type] !== 0) {
            updateingredient[type] = this.state.ingredients[type] - 1;
            let updateprice = oldprice - ListPrice[type];
            this.setState({ ingredients: updateingredient, totalprice: updateprice });
            this.updatePurchase(updateingredient);
        }
        else {
            window.alert('Sorry, This Ingredients Is Not Exist In Your Burger');
        }
    }
    OnHandleModal = () => {
        console.log('hello 1');
        this.setState({ purcharing: true });
    }
    RemoveModal = () => {
        console.log('abcd1234');
        this.setState({ purcharing: false });
    }
    OnHandleSubmit = () => {
        window.alert('You have been submit');
    }
    OnHandleCancel = () => {
        window.alert('You Was Clicked Cancel');
    }

    updatePurchase(ingredients) {
        // let ingredients = this.state.ingredients;
        let sum = Object.keys(ingredients).map((nameitem) => {
            return ingredients[nameitem];
        }).reduce((total, price) => {
            return total + price;
        }, 0)
        this.setState({ orderbtn: sum > 0 });
    }



    render() {
        return (
            <Aux>
                <Modal Show={this.state.purcharing} clickedBD2={this.RemoveModal}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        btnCancel={this.OnHandleCancel}
                        btnSubmit={this.OnHandleSubmit}
                        total={this.state.totalprice}
                    />
                </Modal>

                <Burger rootIngredients={this.state.ingredients} />
                <BuildControls
                    orderbtn={this.state.orderbtn}
                    total={this.state.totalprice}
                    addbuilder={this.addIngredient}
                    delbuilder={this.delIngredients}
                    Modal={this.OnHandleModal}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;