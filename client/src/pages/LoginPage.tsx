import React from 'react';
import {useLocation} from "react-router";

import Auth from '../components/Auth/Auth'
import {IDataBody} from '../types/index'
import {LOGIN_ROUTE,REGISTRATION_ROUTE} from "../utils/paths";

const LoginPage = () => {
    const {pathname} = useLocation()

    const login:IDataBody = {
        title: 'Login',
        subtitle: 'Please login using account detail bellow.',
        fromText: 'Don’t have an Account?Create account',
        btnText: 'sign in',
        linkTo: REGISTRATION_ROUTE
    }

    const registration:IDataBody = {
        title: 'Registration',
        subtitle: 'Please Register using account detail bellow.',
        fromText: 'Already have an account?Login',
        btnText: 'sign up',
        linkTo: LOGIN_ROUTE
    }

    return (
        <div className="login-container" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
            <Auth data={pathname == LOGIN_ROUTE ? login : registration}></Auth>
        </div>
    );
};

export default LoginPage;