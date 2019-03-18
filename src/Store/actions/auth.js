

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
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('localId');
    return {
        type:actionTypes.AUTH_LOGOUT,
    }
}

const checkTimeLogout = (time) =>{
    console.log(time/60 +' minute to active');
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
                console.log(res.data);
                localStorage.setItem('token',res.data.idToken);
                localStorage.setItem('localId',res.data.localId);
                localStorage.setItem('expiration',new Date(new Date().getTime() + res.data.expiresIn*1000));
                localStorage.setItem('refreshToken',res.data.refreshToken);
                
                console.log(res.data.expiresIn*1000);
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

export const checkAuthAuto = () => {
    let token = localStorage.getItem('token');
    let localId = localStorage.getItem('localId');
    let expiration = localStorage.getItem('expiration');
    let refreshToken = localStorage.getItem('refreshToken');
    return dispatch => {
        if(!token)
        {
            dispatch(logout());
        }
        else{
            
            if(new Date(expiration) > new Date())
            {
                let data = {
                    idToken:token,
                    localId:localId,
                    RefreshToken:refreshToken,
                }
                dispatch(authsuccess(data));
                checkTimeLogout((new Date(expiration) - new Date())/1000);
            }
            else {
                dispatch(logout());
            }
        }
    }  
}