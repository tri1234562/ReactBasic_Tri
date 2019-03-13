import * as actionTypes from './actionTypes';
import axios from '../../axios-connect';

const purchaseSuccess = (orderData,orderId) => {
    return {
        type: actionTypes.PURCHASE_SUCCESS,
        data:orderData,
        id:orderId,
    }
}

const purchaseFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_FAILED,
        error:error,
    }
}

const InitOrder = (data) => {
    return {
        type: actionTypes.INIT_ORDERS,
        data: data,
    }
}

export const PostOrder = (orderData) => {
    return dispatch => {
        axios.post('/orders.json',orderData).then((res) => {
            dispatch(purchaseSuccess(orderData,res.data));
        }).catch((error) => {
            dispatch(purchaseFailed(error));
        })
    }
}

export const GetOrders = () => {
    return dispatch => {
        axios.get('/orders.json').then((res) => {
            const DATA = [];
            for(let key in res.data){
                DATA.push(res.data[key]);
            }
            dispatch(InitOrder(DATA));
        }).catch((error) => {
            dispatch(purchaseFailed(error));
        })
    }
}