import React from 'react';
import {useLocation} from "react-router";

import Auth from '../../components/Auth/Auth'
import {loginBody,registrationBody} from "../../helpers/authHelper";
import {LOGIN_ROUTE} from "../../utils/paths";

const LoginPage = () => {
    const {pathname} = useLocation()

    return (
        <div className="login-section" style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100%'}}>
            <Auth data={pathname == LOGIN_ROUTE ? loginBody : registrationBody}></Auth>
        </div>
    );
};

export default LoginPage;