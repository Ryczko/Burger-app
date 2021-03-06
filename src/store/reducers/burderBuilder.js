import * as actions from '../actions/actionTypes';


const initialState = {
    ingredients: null,
    authRedirectPath: "/",
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_INGREDIENT:

            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actions.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        case actions.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                error: false,
                totalPrice: initialState.totalPrice
            }
        case actions.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        case actions.RESET_INGREDIENTS:
            let reseted = { ...state.ingredients };

            for (let key in reseted) {
                reseted[key] = 0;
            }
            return {
                ...initialState,
                ingredients: reseted
            }
        case actions.CHANGE_AUTH_PATH:
            return {
                ...state,
                authRedirectPath: action.path
            }
        default:
            return state;
    }
};

export default reducer

