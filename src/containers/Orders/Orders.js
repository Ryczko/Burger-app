import React, { useEffect } from 'react';
import axios from 'axios-orders';
import Order from 'components/Order/Order';
import Spinner from 'components/UI/Spinner/Spinner';
import withErrorHandler from 'hoc/withErrorHandler';
import * as actions from 'store/actions';
import { connect } from 'react-redux';


function Orders(props) {



    useEffect(() => {
        props.onFetchOrders(props.token, props.userId);
    }, []);

    let ordersList = <h3 style={{ marginTop: '50px' }}>No orders</h3>

    if (props.orders.length !== 0) {
        ordersList = props.orders.map(el => <Order key={el.id} price={el.price} ingredients={el.ingredients} />);
    }

    return (
        <div>
            {props.loading ? <Spinner /> : ordersList}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));