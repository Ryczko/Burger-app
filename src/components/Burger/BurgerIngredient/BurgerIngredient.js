import React from 'react';
import { BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Salad, Bacon } from './BurgerIngredient.css'
import PropTypes from 'prop-types'

function BurgerIngredient(props) {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <BreadBottom />;
            break;
        case ('bread-top'):
            ingredient = (
                <BreadTop>
                    <Seeds1 />
                    <Seeds2 />
                </BreadTop>
            );
            break;
        case ('meat'):
            ingredient = <Meat />
            break;
        case ('bacon'):
            ingredient = <Bacon />
            break;
        case ('cheese'):
            ingredient = <Cheese />
            break;
        case ('salad'):
            ingredient = <Salad />
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;