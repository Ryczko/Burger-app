import React, { useEffect, useState } from 'react';
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 1

};



function BurgerBuilder(props) {

    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    })
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
        const sum = Object.keys(ingredients).map(el => (
            ingredients[el]
        )).reduce((sum, el) => sum + el, 0)
        setPurchasable(sum > 0)
    }, [ingredients])


    return (
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
    );
}

export default BurgerBuilder;