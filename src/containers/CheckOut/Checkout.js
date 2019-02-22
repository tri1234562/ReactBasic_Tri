
import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{

    state = {
        ingredients:null,
        loading:false,
        price:0,
    }
    componentDidMount()
    {
        // const query = new URLSearchParams(this.props.location.search);  
        // const newingredients = {};    
        // for(let item of query.entries())
        // {
        //     if(item[0] === 'price')
        //     {
        //         this.setState({price: +item[1]});
        //     }
        //     else
        //     {
        //         newingredients[item[0]] = +item[1];
        //     }
        // }
        // this.setState({ingredients:newingredients});
    }

    OnHandleSubmit = (event) => {
        this.props.history.replace('./checkout/contactdata');
    }
    OnHandleBack = () => {
        this.props.history.goBack();
    }

    render(){
        return(
            <div>
                { this.props.ingReducer &&
                <CheckoutSummary 
                    ingredients={this.props.ingReducer}
                    submitOrder = {this.OnHandleSubmit}
                    clickBack = {this.OnHandleBack}
                />}
                <Route path = {this.props.match.path + '/contactdata'} render= {() => <ContactData ingredients={this.props.ingReducer} totalprice={this.props.totalReducer} />} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        ingReducer:state.ingredients,
        totalReducer:state.price,
    }
}

export default connect(mapStateToProps)(Checkout);