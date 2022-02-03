import React from 'react';

import Auth from '../components/Auth/Auth'

const LoginPage = () => {


    const login = {
        title: 'Login',
        subtitle: 'jfds',
        btnText: 'sign in',
    }


    return (
        <div className="login-container">
            <Auth data={login}></Auth>
        </div>
    );
};

export default LoginPage;