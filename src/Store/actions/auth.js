

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

const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const Auth = (email, password) => {

    return dispatch => {
        const data = {
            email: email,
            password: password,
            returnSecureToken: true,
        }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB8xnLwLt6USAHyxaANvWtL4eQkNl38Qg8', data)
            .then(res => {

                dispatch(authsuccess(res.data));

            }).catch(error => {

                dispatch(authFail(error));

            })
    }





    // return dispatch => {
    //     dispatch(authStart());
    // }
}