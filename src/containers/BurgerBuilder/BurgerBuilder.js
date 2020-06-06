import React, { useEffect, useState } from 'react';
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios-orders'
import { css } from "@emotion/core";
import withErrorHandler from 'hoc/withErrorHandler'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1

};

const center = css`
  left:45%;
  top:50%;
  transform:translate(-50%,-50%);
  position:absolute;
`;



function BurgerBuilder(props) {

    const [ingredients, setIngredients] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get('https://burger-app-2350a.firebaseio.com/ingredients.json')
            .then(res => {

                setIngredients(res.data)
            })
            .catch(err => { setError(true) })
    }, [])

    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasable, setPurchasable] = useState(false);



    const addIngredientHandler = (type) => {

        const newIngredients = {
            ...ingredients
        }
        newIngredients[type] = ingredients[type] + 1;

        setIngredients(newIngredients);
        setTotalPrice(totalPrice + INGREDIENT_PRICES[type])
    }

    const removeIngredientHandler = (type) => {
        if (ingredients[type] <= 0) return;
        const newIngredients = {
            ...ingredients
        }
        newIngredients[type] = ingredients[type] - 1;

        setIngredients(newIngredients);
        setTotalPrice(totalPrice - INGREDIENT_PRICES[type])
    }



    const disabledInfo = {
        ...ingredients
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    useEffect(() => {
        if (ingredients) {
            const sum = Object.keys(ingredients).map(el => (
                ingredients[el]
            )).reduce((sum, el) => sum + el, 0)
            setPurchasable(sum > 0)
        }
    }, [ingredients])


    return (
        <>
            {ingredients ? (
                <>
                    <Burger ingredients={ingredients} />
                    <BuildControls
                        ingredientAdded={addIngredientHandler}
                        ingredientRemoved={removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={purchasable}
                        price={totalPrice}
                        ingredients={ingredients}
                    />

                </>
            ) : error ? <p style={{ textAlign: 'center', marginTop: '150px' }}>Connecting error</p> : <PacmanLoader css={center} />}


        </>
    );
}

export default withErrorHandler(BurgerBuilder, axios);