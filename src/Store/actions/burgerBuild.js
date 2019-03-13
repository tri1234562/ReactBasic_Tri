import * as actionTypes from './actionTypes'
import axios from '../../axios-connect';

export const addIngrement = (value) => {
    return {
        type:actionTypes.ADD_INGREDIENT,
        nameIng:value
    }
}

export const removeIngrement = (value) => {
    return {
        type: actionTypes.DELETE_INGREDIENT,
        nameIng:value
    }
}

export const refreshBurger = () => {
    return {
        type:actionTypes.REFRESH_BURGER,
    }
}

const setIngredients = (ing) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ing,
    }
}

const initFailed = (error) => {
    return {
        type: actionTypes.FECTH_INGREDIENTS_FAILED,
        error:error,
    }
}



export const initIngredients = () => {
    return dispatch => {
        axios.get('/Ingredients.json').then((res) => {
            dispatch(setIngredients(res.data));
        }).catch((error) => {
            dispatch(initFailed(error));
        });
    }
}