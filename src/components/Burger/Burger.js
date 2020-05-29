import React from 'react';
import { BurgerStyle } from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

function Burger({ ingredients }) {

    const transformedIngredients = Object.keys(ingredients)
        .map(el => (
            [...Array(ingredients[el])].map((_, i) => (
                <BurgerIngredient key={el + i} type={el} />
            ))
        ))


    return (
        <BurgerStyle>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </BurgerStyle >
    );
}

export default Burger;