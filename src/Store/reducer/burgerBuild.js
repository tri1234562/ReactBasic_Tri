import * as actionTypes from '../actions/actionTypes';
import UpdateObject from '../../Utilities';


const stateInitial = {
    ingredients: null,
    price: 0,
}
const ListPrice = {
    meat: 1,
    bacon: 2,
    salad: 0.5,
    cheese: 1.6,
};

const AddIng = (state, action) => {
    const x1 = { [action.nameIng]: state.ingredients[action.nameIng] + 1 };
    const UpdateIng = UpdateObject(state.ingredients, x1);
    const UpdateAll = { ingredients: UpdateIng, price: state.price + ListPrice[action.nameIng] };
    return UpdateObject(state, UpdateAll);
}

const DeleteIng = (state,action) => {
    if (state.ingredients[action.nameIng] === 0) {
        window.alert('het roi ma xoa cai gi');
        return {
            ...state,
        }
    }else {
        const Del = {[action.nameIng]: state.ingredients[action.nameIng] -1} ;
        const UpdateIng = UpdateObject(state.ingredients,Del);
        const UpdateAll = {ingredients: UpdateIng,price:state.price - ListPrice[action.nameIng]};
        return UpdateObject(state,UpdateAll);
        // return {
        //     ...state,
        //     ingredients: {
        //         ...state.ingredients,
        //         [action.nameIng]: state.ingredients[action.nameIng] - 1,
        //     },
        //     price: state.price - ListPrice[action.nameIng],
        // }
    }
}

const setIngre = (state,action) => {
    const x = { ingredients:{
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat, //để đổi thứ tự xuất hiện của các thành phần trên giao diện nếu muốn!!
    }};
    return UpdateObject(state, x);
}

const refresh = (state) => {
    const refreshIng = {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    };
    const refreshAll = {ingredients:refreshIng,price:0};
    return UpdateObject(state,refreshAll);

}
const reducers = (state = stateInitial, action) => {
    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT): return AddIng(state,action);
        case (actionTypes.DELETE_INGREDIENT): return DeleteIng(state,action);
        case (actionTypes.SET_INGREDIENTS): return setIngre(state,action);
        case (actionTypes.REFRESH_BURGER): return refresh(state);
        case (actionTypes.FECTH_INGREDIENTS_FAILED):
            {
                window.alert(action.error);
                return {
                    ...state,
                }
            }

        default:
            return state;
    }
}

export default reducers;
