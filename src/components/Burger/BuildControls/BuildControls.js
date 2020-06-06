import React, { useState } from 'react';
import { BuildPanel, OrderButton } from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

import Modal from 'components/UI/Modal/Modal';
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary'
import axios from 'axios-orders'

import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
import withErrorHandler from 'hoc/withErrorHandler'

const override = css`
  left:40%;
`;


const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


function BurgerControls(props) {

    const [purchasing, setPurchasing] = useState(false)
    const [loading, setLoading] = useState(false)


    const handleCloseModal = () => {
        setPurchasing(false);
    }

    const handleContinuePurchase = async () => {
        setLoading(true);
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                name: "Konrad",
                adress: {
                    steet: 'x',
                    ziCode: '11111',
                    country: 'Poland'
                },
                email: 'abc@x.com'
            },
            delieveryMethod: 'fastest'
        }

        await axios.post('/orders', order)

        setPurchasing(false)
        setLoading(false)

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

            <OrderButton disabled={!props.purchasable} onClick={() => setPurchasing(true)}>Order</OrderButton>

            <Modal active={purchasing} loading={loading} closeModal={handleCloseModal}>
                {loading ?
                    <PacmanLoader
                        css={override}
                        color="green" /> :
                    (<OrderSummary
                        ingredients={props.ingredients}
                        continue={handleContinuePurchase}
                        cancel={handleCloseModal}
                        price={props.price.toFixed(2)}
                    />)
                }

            </Modal>

        </BuildPanel >
    );
}

export default withErrorHandler(BurgerControls, axios);