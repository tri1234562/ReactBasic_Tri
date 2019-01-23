import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{

    state = {
        ingredients:{
            salad:1,
            meat:2,
            cheese:1,
            bacon:2,
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);  
        const newingredients = {};
        
        for(let item of query.entries())
        {
           newingredients[item[0]] = +item[1];
        }
        this.setState({ingredients:newingredients});
    }

    OnHandleSubmit = () => {
        this.props.history.replace('./checkout/contactdata');
    }
    OnHandleBack = () => {
        this.props.history.goBack();
    }

    render(){
        return(
            <CheckoutSummary 
                ingredients={this.state.ingredients}
                submitOrder = {this.OnHandleSubmit}
                clickBack = {this.OnHandleBack}
            />
        )
    }
}

export default Checkout;