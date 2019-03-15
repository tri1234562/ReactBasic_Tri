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

export const PostOrder = (token, orderData) => {
    return dispatch => {
        axios.post('/orders.json?auth='+token,orderData).then((res) => {
            window.alert('Order Complete!! Tks You For Your Support');
            dispatch(purchaseSuccess(orderData,res.data));
        }).catch((error) => {
            dispatch(purchaseFailed(error));
        })
    }
}

export const GetOrders = (token) => {
    return dispatch => {
        axios.get('/orders.json?auth='+token).then((res) => {
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