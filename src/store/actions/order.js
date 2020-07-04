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


export const sendPurchase = (orderData, token) => {
    return async dispatch => {

        const response = await axios.post('/orders.json?auth=' + token, orderData)
        try {
            dispatch(purchaseBurgerSuccess(response));
            dispatch(changePurchased());
        }
        catch (err) { dispatch(purchaseBurgerFail(err)); }
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders
    }
}
export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error
    }
}
export const fetchOrdersStart = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_START,

    }
}

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        axios.get('orders.json' + queryParams)
            .then(res => {
                const ordersTemp = [];
                for (const key in res.data) {
                    ordersTemp.push({
                        ...res.data[key],
                        id: key
                    })
                }
                dispatch(fetchOrdersSuccess(ordersTemp));
            })
            .catch(er => {
                dispatch(fetchOrdersFail(er))
            })
    }
}