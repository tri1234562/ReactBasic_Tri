

import * as actionTypes from './actionTypes';
import axios from 'axios';

// const authStart = () => {
//     return {
//         type:actionTypes.AUTH_START,
//     }
// }

const authsuccess = (authdata) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authdata,
    }
}

const authFail = (error,message) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
        message:message,
    }
}

export const logout = () => {
    return {
        type:actionTypes.AUTH_LOGOUT,
    }
}

const checkTimeLogout = (time) =>{
    console.log(time);
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        },time*1000);
    }
   
}

export const Auth = (email, password, signIn) => {

    return dispatch => {
        const data = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        if(signIn)
        {
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB8xnLwLt6USAHyxaANvWtL4eQkNl38Qg8',data)
            .then(res => {
                dispatch(authsuccess(res.data));
                dispatch(checkTimeLogout(res.data.expiresIn));
            })
            .catch(error => {
                dispatch(authFail(error,error.response.data.error.message));
            });
        }
        else
        {
            axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB8xnLwLt6USAHyxaANvWtL4eQkNl38Qg8', data)
            .then(res => {
                console.log('alo 123456')
                dispatch(authsuccess(res.data));
            }).catch(error => {
                dispatch(authFail(error,error.response.data.error.message));
            })
        }
        
    }





    // return dispatch => {
    //     dispatch(authStart());
    // }
}