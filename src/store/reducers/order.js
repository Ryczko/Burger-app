import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
    order: null,
    error: false,
    purchased: false
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
        default:
            return state;
    }
}
export default reducer;