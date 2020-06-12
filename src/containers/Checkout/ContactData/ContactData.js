import React, { useState } from 'react';
import Button from 'components/UI/Button/Button'
import { ContactDataStyle } from './ContactData.css'
import PacmanLoader from "react-spinners/PacmanLoader";
import axios from 'axios-orders'
import { css } from "@emotion/core";
const override = css`
transform:translateX(-50px);
  margin:50px auto;
`;

function ContactData(props) {

    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false)
    const [purchasing, setPurchasing] = useState(false)
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState({
        street: '',
        postalCode: ''
    })

    const handleOrder = async (e) => {
        e.preventDefault();
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

        await axios.post('/orders.json', order)

        setPurchasing(false)
        setLoading(false)
        props.history.push('/')
    }

    return (
        <ContactDataStyle>
            <h3>Enter your contact data</h3>
            {loading ?
                <PacmanLoader css={override} />
                : (<form>
                    <input type="text" name="name" placeholder="your name" />
                    <input type="text" name="email" placeholder="your email" />
                    <input type="text" name="street" placeholder="street" />
                    <input type="text" name="postal" placeholder="postal" />
                    <Button success clicked={handleOrder}>Order</Button>
                </form>)}

        </ContactDataStyle>
    );
}

export default ContactData;