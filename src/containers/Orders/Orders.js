import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-connect';


class Orders extends Component {

    state = {
        Orders: [],
    }

    componentDidMount() {
        let motcaiarray = [];
        axios.get('/orders.json').then(res => {
            Object.keys(res.data).map((item) => {
                motcaiarray.push(res.data[item]);
                return 1;
            });
            console.log(res);
            console.log(motcaiarray);
            this.setState({ Orders: motcaiarray });
            console.log(this.state.Orders);
        })
    }

    render() {
        return (
            <div>
                {this.state.Orders.map(item => {
                    return (
                        <Order key={item.id}  priceOrder={item.total} ingredientsOrder={item.ingredients} />
                    )
                })}
            </div>
        )

    }
}

export default Orders