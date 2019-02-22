import React, { Component } from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import {connect} from 'react-redux';
import * as actionTypes from '../../Store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
// const ListPrice = {
//     meat: 1,
//     bacon: 2,
//     salad: 0.5,
//     cheese: 1.6,
// };

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon: 0,
            cheese: 0,
        },
        totalprice: 0,
        // orderbtn: false,
        purcharing: false,
        loading: false,
    }
    // addIngredient = (type) => {
    //     console.log(type);
    //     let updateingredient = { ...this.state.ingredients };
    //     updateingredient[type] = this.state.ingredients[type] + 1;
    //     let oldprice = this.state.totalprice;
    //     let updateprice = oldprice + ListPrice[type];
    //     this.setState({ ingredients: updateingredient, totalprice: updateprice });
    //     this.updatePurchase(updateingredient);
    // }

    // delIngredients = (type) => {
    //     let updateingredient = { ...this.state.ingredients };
    //     let oldprice = this.state.totalprice;
    //     if (updateingredient[type] !== 0) 
    //     {
    //         updateingredient[type] = this.state.ingredients[type] - 1;
    //         let updateprice = oldprice - ListPrice[type];       
    //         this.setState({ ingredients: updateingredient, totalprice: updateprice });
    //         this.updatePurchase(updateingredient);
    //     }

    //     else {
    //         window.alert('Sorry, This Ingredients Is Not Exist In Your Burger');
    //     }
    // }
    OnHandleModal = () => {
        this.setState({ purcharing: true });
    }


    RemoveModal = () => {
       
        this.setState({ purcharing: false });
    }



    OnHandleSubmit = () => {
         this.setState({ loading: false });

        console.log(this.props);

        const queryparams = [];
        for (let i in this.state.ingredients) {
            console.log(i);
            if(this.state.ingredients[i] !== 0)
            {
                queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
            }
        } // su dung encodeURIComponent de ma~ hoa cac ki tu dac biet --> su dung duoc trong URL (?,/,:,...)
        
        queryparams.push('price='+encodeURIComponent(this.state.totalprice)); // push price vao sau, do price k trong state.ingredients

        const queryString = queryparams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString,
        }); // day het du lieu queryString len phan search cua URL

    }




    OnHandleCancel = () => {
        window.alert('You Was Clicked Cancel');
        this.setState({purcharing:false})
    }

    updatePurchase() {
        // let ingredients = this.state.ingredients;
        // const sum = Object.keys(ingredients).map((nameitem) => {
        //     return ingredients[nameitem];
        // }).reduce((total, price) => {
        //     return total + price;
        // }, 0)
        // console.log(sum>0);
        return this.props.totalReducer > 0;
    }



    render() {
        let ordersummary = <OrderSummary
            ingredients={this.props.ingReducer}
            btnCancel={this.OnHandleCancel}
            btnSubmit={this.OnHandleSubmit}
            total={this.props.totalReducer}
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

                <Burger rootIngredients={this.props.ingReducer} />
                <BuildControls
                    orderbtn={this.updatePurchase()}
                    total={this.props.totalReducer}
                    addbuilder={this.props.onAddIngredient}
                    delbuilder={this.props.onDelIngredient}
                    Modal={this.OnHandleModal}
                />
            </Aux>
        );
    }
}


const mapStateToProps = state => {
    return {
        ingReducer: state.ingredients,
        totalReducer: state.price,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient:(nameIng) => dispatch({type:actionTypes.ADD_INGREDIENT,nameIng:nameIng}),
        onDelIngredient:(nameIng) => dispatch({type:actionTypes.DELETE_INGREDIENT,nameIng:nameIng}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);