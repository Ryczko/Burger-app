import React from 'react';
import { BuildPanel, OrderButton } from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


function BurgerControls(props) {


    return (
        <BuildPanel>
            <p>Price: <b>{props.price.toFixed(2)}</b></p>
            {controls.map(el => (
                <BuildControl
                    key={el.label}
                    label={el.label}
                    added={() => props.ingredientAdded(el.type)}
                    removed={() => props.ingredientRemoved(el.type)}
                    disabled={props.disabled[el.type]}
                />

            ))}

            <OrderButton disabled={!props.purchasable} onClick={props.orderButtonClicked}>
                {props.isAuth ? "Order" : "Sing in to order"}
            </OrderButton>



        </BuildPanel >
    );
}

export default BurgerControls;