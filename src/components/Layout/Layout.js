import React from 'react';
import {Main} from './Layout.css'



function Layout(props) {
    return (
        <>
        <div>fdf </div>
        <Main>
            {props.children}
        </Main>
        </>
    );
}

export default Layout;