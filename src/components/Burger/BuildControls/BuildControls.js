import React, { useState } from 'react';
import { BuildPanel, OrderButton } from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

import Modal from 'components/UI/Modal/Modal';
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary'




const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


function BurgerControls(props) {

    const [purchasing, setPurchasing] = useState(false)

    const handleCancellPurchase = () => {
        setPurchasing(!purchasing)
    }
    const handleContinuePurchase = () => {
        alert('ypu continue')
    }


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

            <OrderButton disabled={!props.purchasable} onClick={handleCancellPurchase}>Order</OrderButton>

            <Modal active={purchasing} closeModal={handleCancellPurchase}>
                <OrderSummary
                    ingredients={props.ingredients}
                    continue={handleContinuePurchase}
                    cancel={handleCancellPurchase}
                    price={props.price.toFixed(2)}

                />
            </Modal>

        </BuildPanel>
    );
}

export default BurgerControls;