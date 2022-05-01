import React from "react";
import { useHistory, useLocation } from "react-router";

import Auth from "../../components/Auth/Auth";
import { loginBody, registrationBody } from "../../helpers/authHelper";
import { LOGIN_ROUTE } from "../../utils/paths";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Spinner } from "../../components";

const LoginPage = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { token, loading, error } = useTypedSelector((state) => state.auth);

  if (token) {
    history.push("/home");
  }
  return (
    <div
      className="login-section wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Auth
        data={pathname == LOGIN_ROUTE ? loginBody : registrationBody}
        errorMessage={error}
      ></Auth>
    </div>
  );
};

export default LoginPage;
