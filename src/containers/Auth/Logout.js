import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from 'store/actions';
import { connect } from 'react-redux';





function Logout(props) {

    useEffect(() => {
        props.onLogout();
        props.setIngredients();
        props.changeAuthPath('/');
    }, []);


    return (
        <Redirect to="/" />
    );
}


const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logout()),
        changeAuthPath: (path) => dispatch(actions.changeAuthPath(path)),
        setIngredients: () => dispatch(actions.initIngredients())
    }
}

export default connect(null, mapDispatchToProps)(Logout);