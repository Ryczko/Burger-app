import * as actionTypes from './actionTypes';
import axios from 'axios-orders'


export const purchaseBurgerSuccess = (orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        data: orderData
    }
}
export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}
export const changePurchased = () => {
    return {
        type: actionTypes.CHANGE_PURCHASED
    }
}


export const sendPurchase = (orderData) => {
    return async dispatch => {

        const response = await axios.post('/orders.json', orderData)
        try {
            dispatch(purchaseBurgerSuccess(response));
            dispatch(changePurchased());
        }
        catch (err) { dispatch(purchaseBurgerFail(err)); }


    }

}