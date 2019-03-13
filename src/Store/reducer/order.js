
import * as actionType from '../actions/actionTypes';
import UpdateObject from '../../Utilities';

const StateInitial = {
    order: [],
    loading: false,
}

const Pur_success = (state, action) => {
    return UpdateObject(state, { order: state.order.concat(action.data), idOrder: action.id, })
}



const orderReducer = (state = StateInitial, action) => {
    switch (action.type) {

        case actionType.PURCHASE_SUCCESS: return Pur_success(state, action);
        case actionType.PURCHASE_FAILED: window.alert(action.error); break;
        case actionType.INIT_ORDERS: return UpdateObject(state, { order: action.data })
        default: return state;
            
    }
}

export default orderReducer;