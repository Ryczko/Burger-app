import * as actionTypes from './actionTypes';
import axios from 'axios-orders'
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};
const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}
export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}
export const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS
    }
}
export const initIngredients = (ingredients) => {
    return dispatch => {
        if (!ingredients) {
            axios.get('https://burger-app-2350a.firebaseio.com/ingredients.json')
                .then(res => {
                    dispatch(setIngredients(res.data))
                })
                .catch(err => dispatch(fetchIngredientsFailed()))
        }
        else return;
    }
}