import React, { useEffect, useState } from 'react';
import Burger from '../../components/Burger/Burger'

function BurgerBuilder(props) {

    const [ingredients, setIngredients] = useState({
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    })

    return (
        <>
            <Burger ingredients={ingredients} />
            <div>Build Controls</div>

        </>
    );
}

export default BurgerBuilder;