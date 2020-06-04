import React, { useState } from 'react';
import { Main } from './Layout.css'
import Toollbar from 'components/Navigation/Toolbar/Toolbar'
import SideDrawer from 'components/Navigation/SideDrawer/SideDrawer'

function Layout(props) {

    const [isSideDrawerOpen, setSideDrawerOpen] = useState(false)

    const handleSideDrawer = () => {
        setSideDrawerOpen(!isSideDrawerOpen)
    }
    return (
        <>
            <Toollbar click={handleSideDrawer} />
            <SideDrawer isOpened={isSideDrawerOpen} backdropClick={handleSideDrawer} />
            <Main>
                {props.children}
            </Main>
        </>
    );
}

export default Layout;