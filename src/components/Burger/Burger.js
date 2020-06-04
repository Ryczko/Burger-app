import React from 'react';
import { BurgerStyle } from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

function Burger({ ingredients }) {

    const transformedIngredients = Object.keys(ingredients)
        .map(el => (
            [...Array(ingredients[el])].map((_, i) => (
                <BurgerIngredient key={el + i} type={el} />
            ))
        )).reduce((prev, current) => {
            return prev.concat(current)
        }, [])


    return (

        < BurgerStyle >

            <BurgerIngredient type='bread-top' />
            {transformedIngredients.length === 0 ? <p style={{ padding: '20px' }}>Please, start adding ingredients!</p> : transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </BurgerStyle >
    );
}

export default Burger;