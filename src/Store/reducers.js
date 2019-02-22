import * as actionTypes from './actions.js'


const stateInitial = {
    ingredients:{
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0,
    },
    price:0,
}
const ListPrice = {
    meat: 1,
    bacon: 2,
    salad: 0.5,
    cheese: 1.6,
};

const reducers = (state = stateInitial, action) => {
    switch(action.type){
        case(actionTypes.ADD_INGREDIENT):
        {
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.nameIng] : state.ingredients[action.nameIng] + 1,
                },
                price:state.price + ListPrice[action.nameIng],
            }
        }

        case(actionTypes.DELETE_INGREDIENT):
        {
            if(state.ingredients[action.nameIng] === 0)
            {
                window.alert('het roi ma xoa cai gi');
                return{
                    ...state,
                }
            }       
            else
            {
                return {
                    ...state,
                    ingredients:{
                        ...state.ingredients,
                        [action.nameIng]: state.ingredients[action.nameIng]-1,
                    },
                    price: state.price - ListPrice[action.nameIng],
                }
            }
            
        }

        default:
            return state;
    }
}

export default reducers;
