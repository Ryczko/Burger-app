import React, { useState } from 'react';
import Button from 'components/UI/Button/Button'
import { ContactDataStyle } from './ContactData.css'
import PacmanLoader from "react-spinners/PacmanLoader";

import { css } from "@emotion/core";
import Input from 'components/UI/Input/Input';
import { connect } from 'react-redux'

import * as contactDataActions from 'store/actions'
const override = css`
transform:translateX(-50px);
  margin:50px auto;
`;

function ContactData(props) {
    const [loading, setLoading] = useState(false);
    const [formValidate, setformValidate] = useState(false);
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validate: true,
            isTouched: false,
            validation: {
                required: true,
                minLength: 3
            }
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'street'
            },
            value: '',
            validate: true,
            isTouched: false,
            validation: {
                required: true,

            }
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'zip code'
            },
            value: '',
            validate: true,
            isTouched: false,
            validation: {
                required: true,
                minLength: 5,
                maxLength: 6
            }
        },
        country: {
            elementType: 'input',

            elementConfig: {
                type: 'text',
                placeholder: 'country'
            },
            value: '',
            validate: true,
            isTouched: false,
            validation: {
                required: true,

            }
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'email'
            },
            value: '',
            validate: true,
            isTouched: false,
            validation: {
                required: true,

            }
        },
        delieveryMethod: {
            elementType: 'select',
            elementConfig: {

                options: [
                    { value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'cheapest' }
                ]
            },
            value: 'fastest',
            validate: true,
            isTouched: true,
        }


    })

    const checkValidity = (value, rules) => {
        if (!rules) return true;
        let isValid = true;
        if (rules.required && value.trim() === '') isValid = false;
        if (rules.minLength && value.length < rules.minLength) isValid = false;
        if (rules.maxLength && value.length > rules.maxLength) isValid = false;



        return isValid;
    }
    const handleOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {};

        for (let key in orderForm) {
            formData[key] = orderForm[key].value
        }
        const order = {
            ingredients: props.ingredients,
            price: props.totalPrice.toFixed(2),
            orderData: formData
        }


        props.onPurchase(order);


    }


    const formElementsArray = [];
    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key],

        })

    }



    const inputChangedHandler = (event, inputId) => {

        const updatedOrderForm = {
            ...orderForm
        }
        const updatedFormElement = { ...updatedOrderForm[inputId] };
        updatedFormElement.value = event.target.value;
        if (!updatedFormElement.isTouched) updatedFormElement.isTouched = true;
        updatedFormElement.validate = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputId] = updatedFormElement;


        setOrderForm(updatedOrderForm)

        let isFormValidate = true;
        for (let key in updatedOrderForm) {
            if (!(updatedOrderForm[key].isTouched && updatedOrderForm[key].validate)) {
                isFormValidate = false;
                break;
            }
        }

        setformValidate(isFormValidate)
    }

    return (
        <ContactDataStyle>
            <h3>Enter your contact data</h3>
            {loading ?
                <PacmanLoader css={override} />
                : (<form onSubmit={handleOrder}>

                    {formElementsArray.map(el => <Input
                        key={el.id}
                        elementType={el.config.elementType}
                        elementConfig={el.config.elementConfig}
                        value={el.config.value}
                        validate={el.config.validate}
                        changed={(event) => inputChangedHandler(event, el.id)}
                    />)}

                    <Button success disabled={!formValidate}>Order</Button>
                </form>)}

        </ContactDataStyle>
    );
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurchase: (orderData) => dispatch(contactDataActions.sendPurchase(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);