import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
// import axios from '../../axios-connect.js';
import Spinner from '../../components/UI/Spinner/Spinner';
const ListPrice = {
    meat: 1,
    bacon: 2,
    salad: 0.5,
    cheese: 1.6,
};

class BurgerBuilder extends Component {
    
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
        loading: false,
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
        this.setState({ purcharing: true });
    }
    RemoveModal = () => {
        console.log('abcd1234');
        this.setState({ purcharing: false });
    }

    OnHandleSubmit = () => {
        // this.setState({ loading: true });
        // const dataCustom = {
        //     name: 'Vo Minh Tri',
        //     phoneNumber: '077411312',
        //     address: {
        //         street: 'Nguyen Oanh',
        //         Province: 'Ho Chi Minh City',
        //         Mode: 'normal',
        //     },
        //     ingredients: this.state.ingredients,
        //     total: this.state.totalprice,
        // };


  
        // axios.post("/orders.json", dataCustom).then((response) => {
        //     console.log(response);
          
        //     this.setState({ loading: false,purcharing:false });
            
        // }).catch((error) => {
        //     console.log(error);
        //     this.setState({ loading: false });
        // });
        console.log(this.props);
        
        const queryparams = [];
        for(let i in this.state.ingredients)
        {
            queryparams.push(encodeURIComponent(i) + '=' +encodeURIComponent(this.state.ingredients[i]));
        } // su dung encodeURIComponent de ma~ hoa cac ki tu dac biet --> su dung duoc trong URL (?,/,:,...)

        const queryString = queryparams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+queryString,
        });
        
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
        let ordersummary = <OrderSummary
            ingredients={this.state.ingredients}
            btnCancel={this.OnHandleCancel}
            btnSubmit={this.OnHandleSubmit}
            total={this.state.totalprice}
        />;
        if (this.state.loading) {
            console.log('loading');
            ordersummary = <Spinner />;
        }



        return (
            <Aux>
                <Modal Show={this.state.purcharing} clickedBD2={this.RemoveModal} loaded={this.state.loading}>
                    {ordersummary}
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