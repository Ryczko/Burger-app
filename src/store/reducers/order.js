import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
    orders: [],
    error: false,
    purchased: false,
    loading: false
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
                order: action.orderData,
                error: false
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                error: true
            }
        case actionTypes.CHANGE_PURCHASED:
            return {
                ...state,
                purchased: !state.purchased
            }
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
export default reducer;