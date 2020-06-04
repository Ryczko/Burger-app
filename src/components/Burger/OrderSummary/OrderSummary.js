import React from 'react';
import Button from '../../UI/Button/Button'

function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients).map(el => (
        <li key={el}>{el}: {props.ingredients[el]}</li>
    ))


    return (
        <>
            <h3>Your Burger</h3>
            <p>the best burger</p>
            <ul>
                {ingredientSummary}
            </ul>
            <b>Total price: {props.price} </b>
            <p>continue to checkout?</p>
            <Button clicked={props.cancel}>cancel</Button>
            <Button success clicked={props.continue} >continue</Button>
        </>
    );
}

export default OrderSummary;