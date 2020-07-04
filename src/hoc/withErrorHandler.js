import React, { useState, useEffect } from 'react';

import Modal from 'components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(false)

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(false);
            return req;
        });
        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            setError(err);
        });


        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            };
        }, [reqInterceptor, resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(false)
        }


        return (
            <>
                <Modal
                    active={error}
                    closeModal={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WrappedComponent {...props} />
            </>
        );

    }
}

export default withErrorHandler;

