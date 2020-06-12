import React from 'react';
import { OrderStyled } from './Order.css'

function Order(props) {

    const orders = [];
    for (const key in props.ingredients) {
        orders.push({
            name: key,
            amount: props.ingredients[key]
        })
    }

    const ordersToShow = orders.map(el => <span key={el.name}>{el.name}: {el.amount} </span>)


    return (
        <OrderStyled>
            <p>Ingredients: {ordersToShow}</p>
            <p>Price: USD {props.price}</p>
        </OrderStyled>
    );
}

export default Order;

