import React, { useState } from 'react';
import { Main } from './Layout.css';
import Toollbar from 'components/Navigation/Toolbar/Toolbar';
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

function Layout(props) {

    const [isSideDrawerOpen, setSideDrawerOpen] = useState(false)

    const handleSideDrawer = () => {
        setSideDrawerOpen(!isSideDrawerOpen)
    }
    return (
        <>
            <Toollbar click={handleSideDrawer}
                isAuth={props.isAuthenticated} />
            <SideDrawer isOpened={isSideDrawerOpen} backdropClick={handleSideDrawer} isAuth={props.isAuthenticated} />
            <Main>
                {props.children}
            </Main>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

export default connect(mapStateToProps, null)(Layout);