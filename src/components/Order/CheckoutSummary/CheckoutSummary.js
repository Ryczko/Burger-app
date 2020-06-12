import React from 'react';
import Burger from 'components/Burger/Burger'
import Button from 'components/UI/Button/Button'

import { CheckoutSummaryStyle } from './CheckoutSummary.css'

function CheckoutSummary(props) {
    return (
        <CheckoutSummaryStyle>
            <h1>We hope you will happy</h1>

            {props.ingredients && <Burger ingredients={props.ingredients} />}

            <Button clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button success clicked={props.checkoutContinued}>Continue</Button>
        </CheckoutSummaryStyle>
    );
}

export default CheckoutSummary;