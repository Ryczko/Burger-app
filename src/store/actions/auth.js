import * as actionsTypes from './actionTypes';
import axios from 'axios'
export const authStart = () => {
    return {
        type: actionsTypes.AUTH_START
    };
}
export const authSuccess = (idToken, userId) => {
    return {
        type: actionsTypes.AUTH_SUCCESS,
        idToken,
        userId
    };
}
export const authFail = (error) => {
    return {
        type: actionsTypes.AUTH_FAIL,
        error
    };
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate')
    return {
        type: actionsTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        let link = isSignUp ?
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwGcPDw4T3liIhsHsaPktW7cCAV_x6J-Y' :
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwGcPDw4T3liIhsHsaPktW7cCAV_x6J-Y';


        axios.post(link, authData)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkAuthTimeout(res.data.expiresIn));
            })
            .catch(err => {
                console.log(err)
                dispatch(authFail(err.response.data.error))
            })
    };
}

export const checkLogin = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) dispatch(logout());
        else {
            const expirationDate = localStorage.getItem('expirationDate');
            const userId = localStorage.getItem('userId');
            const TimeToExpiration = (new Date(expirationDate).getTime() - new Date().getTime()) / 1000;
            dispatch(authSuccess(token, userId));
            dispatch(checkAuthTimeout(TimeToExpiration));

        }
    }
}