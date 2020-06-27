import React, { useEffect, useState } from 'react';
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios-orders'
import { css } from "@emotion/core";
import Modal from 'components/UI/Modal/Modal';
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary'
import { connect } from 'react-redux'
import withErrorHandler from 'hoc/withErrorHandler'
import * as actions from 'store/actions'


const center = css`
  left:45%;
  top:50%;
  transform:translate(-50%,-50%);
  position:absolute;
`;
const override = css`
  left:40%;
`;



function BurgerBuilder(props) {

    // const [ingredients, setIngredients] = useState(null)
    //const [totalPrice, setTotalPrice] = useState(4);
    const [error, setError] = useState(false);
    const [purchasing, setPurchasing] = useState(false)
    const [loading, setLoading] = useState(false)

    const [purchasable, setPurchasable] = useState(false);

    const handleCloseModal = () => {
        setPurchasing(false);
    }

    const handleContinuePurchase = async () => {
        // const queryParams = [];

        // for (let i in props.ingredients) {
        //     queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(props.ingredients[i])}`)
        // }
        // queryParams.push(`price=${props.totalPrice}`)
        // const queryString = queryParams.join('&');
        props.history.push({
            pathname: '/checkout',
            // search: '?' + queryString
        });
    }


    // useEffect(() => {
    //     axios.get('https://burger-app-2350a.firebaseio.com/ingredients.json')
    //         .then(res => {

    //             setIngredients(res.data)
    //         })
    //         .catch(err => { setError(true) })
    // }, [])

    // const addIngredientHandler = (type) => {

    //     // const newIngredients = {
    //     //     ...ingredients
    //     // }
    //     // newIngredients[type] = ingredients[type] + 1;

    //     // setIngredients(newIngredients);




    //     props.onIngredientAdded(type)
    //     setTotalPrice(totalPrice + INGREDIENT_PRICES[type])
    // }

    // const removeIngredientHandler = (type) => {
    //     // if (ingredients[type] <= 0) return;
    //     // const newIngredients = {
    //     //     ...ingredients
    //     // }
    //     // newIngredients[type] = ingredients[type] - 1;

    //     // setIngredients(newIngredients);
    //     props.onIngredientRemoved(type)
    //     setTotalPrice(totalPrice - INGREDIENT_PRICES[type])
    // }



    const disabledInfo = {
        ...props.ingredients
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    useEffect(() => {
        if (props.ingredients) {
            const sum = Object.keys(props.ingredients).map(el => (
                props.ingredients[el]
            )).reduce((sum, el) => sum + el, 0)
            setPurchasable(sum > 0)
        }
    }, [props.ingredients])


    return (
        <>
            {props.ingredients ? (
                <>
                    <Burger ingredients={props.ingredients} />
                    <BuildControls
                        ingredientAdded={props.onIngredientAdded}
                        ingredientRemoved={props.onIngredientRemoved}
                        disabled={disabledInfo}
                        purchasable={purchasable}
                        price={props.totalPrice}
                        ingredients={props.ingredients}
                        orderButtonClicked={() => setPurchasing(true)}
                    />
                    <Modal active={purchasing} loading={loading} closeModal={handleCloseModal}>
                        {loading ?
                            <PacmanLoader
                                css={override}
                                color="green" /> :
                            (<OrderSummary
                                ingredients={props.ingredients}
                                continue={handleContinuePurchase}
                                cancel={handleCloseModal}
                                price={props.totalPrice.toFixed(2)}
                            />)
                        }

                    </Modal>

                </>
            ) : error ? <p style={{ textAlign: 'center', marginTop: '150px' }}>Connecting error</p> : <PacmanLoader css={center} />}


        </>
    );
}



const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (name) => dispatch({ type: actions.ADD_INGREDIENT, ingredientName: name }),
        onIngredientRemoved: (name) => dispatch({ type: actions.REMOVE_INGREDIENT, ingredientName: name }),
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));