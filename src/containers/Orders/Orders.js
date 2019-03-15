import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import {connect} from 'react-redux';
import * as ActionsType from '../../Store/actions/indexActions';


class Orders extends Component {
    
    // state = {
    //     Orders: [],
    // }
    
    componentDidMount() {
        this.props.InitOrders(this.props.Token);
        // axios.get('/orders.json').then(res => {
        //     Object.keys(res.data).map((item) => { // trả về 1 array các key random trên firebase -> dùng map để get value từng item.
        //         motcaiarray.push(res.data[item]);
        //         // console.log(res.data[item]);
        //         return 1;
        //     });
        //     // console.log(res);
        //     // console.log(motcaiarray);
        //     this.setState({ Orders: motcaiarray }); 
        // })
    }

    render() {
        console.log(this.props.Orders);
        return (
            <div>
                {this.props.Orders.map(item => {
                    return (
                        <Order key={item.id}  priceOrder={item.total} ingredientsOrder={item.ingredients} />
                    )
                })}
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        Orders: state.OR.order,
        Token:state.AR.Token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        InitOrders:(Token) => dispatch(ActionsType.GetOrders(Token))
    }
     
}

export default connect(mapStateToProps,mapDispatchToProps)(Orders);