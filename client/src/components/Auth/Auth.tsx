import React, { FC } from "react";
import { useLocation } from "react-router";

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../../utils/paths";



const Auth: FC = ({data}) => {
  const { pathname } = useLocation();

console.log(data)

  return (
    <div className="login-form">
      <h3 className="login-form__title">{}</h3>
      <p className="login-form__subtitle"></p>
    </div>
  );
};

export default Auth;
