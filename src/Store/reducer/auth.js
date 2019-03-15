
import * as ActionTypes from '../actions/actionTypes';
import UpdateObject from '../../Utilities';
const initialState = {
    Token: null,
    userId: null,
    error: null,
    loading: false,
}

const authSuccess = (state, action) => {
    return UpdateObject(state, { Token: action.authData.idToken, userId: action.authData.localId, error:null })
}
const authfail = (state, action) => {
    return UpdateObject(state, { error: action.message });
}

const authlogout = (state,action) => {
    return UpdateObject(state,{Token:null,userId:null});
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (ActionTypes.AUTH_SUCCESS): return authSuccess(state, action);
        case (ActionTypes.AUTH_FAIL): return authfail(state, action);
        case (ActionTypes.AUTH_LOGOUT): return authlogout(state,action);
        default: return state;
    }
}

export default authReducer;