import React, { FC, useMemo, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { IDataBody } from "../../types/productTypes";
import "./Auth.scss";
import { useDispatch } from "react-redux";
import { loginFetch } from "../../store/action-creators/authAction";
import ErrorAlert from "../common/ErrorAlert/ErrorAlert";
import { registrationBody } from "../../helpers/authHelper";
import { registration } from "../../API/userApi";
import { userInfo } from "os";
import { LOGIN_ROUTE } from "../../utils/paths";

interface AuthProps {
  data: IDataBody;
  errorMessage?: null | string | object;
}

const Auth: FC<AuthProps> = ({ data, errorMessage }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userState, setUserState] = useState({
    email: "",
    password: "",
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };
  const auth = async () => {
    const userInfo = { ...userState, email: userState.email.trim() };
    if (data.type.toLowerCase() === "sign in") {
      dispatch(loginFetch(userInfo));
    } else {
      const data = await registration(userInfo);
      if (data) {
        history.push(LOGIN_ROUTE);
      }
    }
  };

  return (
    <div className="login-form">
      <div className="login-text">
        <h3 className="login-text__title">{data.title}</h3>
        <p className="login-text__subtitle">{data.subtitle}</p>
      </div>
      <div className="fields">
        <input
          name="email"
          type="text"
          className="fields__email"
          placeholder="Email"
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          className="fields__password"
          placeholder="Password"
          onChange={onChange}
        />

        <Link className="fields__text" to="/forgotPass">
          Forgot your password?
        </Link>
      </div>
      <ErrorAlert errorMessage={errorMessage} />

      <button className="login-form__btn" onClick={auth}>
        {data.type}
      </button>
      <Link to={data.linkTo} className="login-form__text">
        {data.fromText}
      </Link>
    </div>
  );
};

export default Auth;
