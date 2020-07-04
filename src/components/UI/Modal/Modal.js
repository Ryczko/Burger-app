import React from 'react';
import ReactDOM from 'react-dom'
import { ModalStyled } from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

function Modal(props) {


    return ReactDOM.createPortal(
        <>
            <Backdrop active={props.active} onClick={props.closeModal} />
            <ModalStyled active={Boolean(props.active)}>
                {props.children}
            </ModalStyled>
        </>,
        document.getElementById('modal')
    );
}

export default React.memo(Modal, (prev, next) =>
    next.active === prev.active && next.loading === prev.loading
);

