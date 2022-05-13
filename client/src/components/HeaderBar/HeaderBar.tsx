import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./headerBar.scss";
import { BASKET_ROUTE, LOGIN_ROUTE } from "../../utils/paths";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/action-creators/authAction";
import { getFromBasket } from "../../store/action-creators/basketAction";
import { IUser } from "../../types/storeTypes/userTypes";

const HeaderBar: FC = () => {
  const dispatch = useDispatch();

  const data = {
    email: "erkin.berdibaev@gmail.com",
    number: "+996777664690",
    currency: ["USD", "KGZ", "RUB"],
  };
  const { user } = useTypedSelector((state) => state.auth);

  console.log(user?.id);
  return (
    <div className="top-bar">
      <div className="info">
        <span className="email">{data.email}</span>
        <span className="phone">{data.number}</span>
      </div>
      <div className="buttons">
        <select className="buttons__currency">
          {data.currency.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
        {user ? (
          <button
            className="buttons__logout"
            onClick={() => dispatch(logOut())}
          >
            Log out
          </button>
        ) : (
          <Link className="buttons__login" to={LOGIN_ROUTE}>
            Login
          </Link>
        )}
        <Link
          className="buttons__basket"
          to={BASKET_ROUTE}
          onClick={() =>
            user
              ? dispatch(getFromBasket(user?.id))
              : dispatch(getFromBasket(""))
          }
        ></Link>
      </div>
    </div>
  );
};

export default HeaderBar;
