import React, { useState, useEffect, useRef } from 'react';
import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'


function Checkout(props) {
    // const [ingredients, setIngredients] = useState(null);
    // const [price, setPrice] = useState(0);
    // const location = useRef(props.location);

    // useEffect(() => {
    //     const query = new URLSearchParams(location.current.search);
    //     const ingredientsTemp = {};
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') setPrice(+param[1])
    //         else ingredientsTemp[param[0]] = +param[1];
    //     }
    //     setIngredients(ingredientsTemp);
    // }, [])


    const handleCheckoutCancelled = () => {
        props.history.goBack();
    }
    const HandleCheckoutContinued = () => {
        props.history.replace('/checkout/contact-data')
    }
    return (
        <div>
            <CheckoutSummary ingredients={props.ingredients}
                checkoutCancelled={handleCheckoutCancelled}
                checkoutContinued={HandleCheckoutContinued}
            />
            <Route path={props.match.url + '/contact-data'} component={ContactData} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);