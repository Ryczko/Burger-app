import React, { useState } from 'react';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button'
import * as actions from 'store/actions';
import { connect } from 'react-redux';
import Spinner from 'components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom';

function Auth(props) {
    const [isSignUp, setIsSignUp] = useState(false);
    const [controls, setControls] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Mail adress'
            },
            value: '',
            validate: true,
            isTouched: false,
            validation: {
                required: true,
                minLength: 3
            }
        },
        password: {
            elementType: 'password',
            elementConfig: {
                type: 'password',
                placeholder: 'password'
            },
            value: '',
            validate: true,
            isTouched: false,
            validation: {
                required: true,
                minLength: 6
            }
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAuth(controls.email.value, controls.password.value, isSignUp);

    }
    const checkValidity = (value, rules) => {
        if (!rules) return true;
        let isValid = true;
        if (rules.required && value.trim() === '') isValid = false;
        if (rules.minLength && value.length < rules.minLength) isValid = false;
        if (rules.maxLength && value.length > rules.maxLength) isValid = false;

        return isValid;
    }

    const inputChangedHandler = (event, inputId) => {

        const updatedOrderForm = {
            ...controls
        }
        const updatedFormElement = { ...updatedOrderForm[inputId] };
        updatedFormElement.value = event.target.value;
        if (!updatedFormElement.isTouched) updatedFormElement.isTouched = true;
        updatedFormElement.validate = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedOrderForm[inputId] = updatedFormElement;

        setControls(updatedOrderForm)

        for (let key in updatedOrderForm) {
            if (!(updatedOrderForm[key].isTouched && updatedOrderForm[key].validate)) {
                break;
            }
        }

    }

    const formElementsArray = [];
    for (let key in controls) {
        formElementsArray.push({
            id: key,
            config: controls[key],

        })
    }

    const form = formElementsArray.map(el => <Input
        key={el.id}
        elementType={el.config.elementType}
        elementConfig={el.config.elementConfig}
        value={el.config.value}
        validate={el.config.validate}
        changed={(event) => inputChangedHandler(event, el.id)}

    />);


    let authRedirect = null;
    if (props.isAuth) {
        authRedirect = <Redirect to={props.authPath} />
    }


    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            {authRedirect}
            {props.error ? <p>{props.error.message}</p> : null}
            {props.loading ?
                <Spinner /> :
                <>

                    <form onSubmit={handleSubmit}>
                        {form}
                        <Button success>Submit</Button>
                    </form>
                    <Button fail clicked={() => setIsSignUp(!isSignUp)}>switch to {isSignUp ? 'sign in' : 'sign up'}</Button>
                </>
            }

        </div>
    );
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null,
        authPath: state.burgerBuilder.authRedirectPath

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        changeAuthPath: () => dispatch(actions.changeAuthPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);