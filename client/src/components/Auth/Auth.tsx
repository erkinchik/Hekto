import React, { FC } from "react";
import { useLocation,Link} from "react-router-dom";

import {IDataBody} from '../../types/index'
import './Auth.scss'


interface AuthProps {
  data: IDataBody;
}

const Auth: FC<AuthProps> = ({data}) => {
  const { pathname } = useLocation();


console.log(data)
  return (
    <div className="login-form">
        <div className="login-text">
            <h3 className="login-text__title">{data.title}</h3>
            <p className="login-text__subtitle">{data.subtitle}</p>
        </div>
        <div className="fields">
            <input type="text" className="fields__email" placeholder='Email'/>
            <input type="password" className="fields__password" placeholder='Password'/>
            <Link className="fields__text" to='/forgotPass'>Forgot your password?</Link>
        </div>
        <button className="login-form__btn">
            {data.btnText}
        </button>
        <Link to={data.linkTo} className="login-form__text">
            {data.fromText}
        </Link>
    </div>
  );
};

export default Auth;
