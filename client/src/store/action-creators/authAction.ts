import { Dispatch } from "redux";
import {
  AuthActionTypes,
  IUser,
  UserActions,
} from "../../types/storeTypes/userTypes";
import { IUserTypes } from "../../types/userTypes";
import { login } from "../../API/userApi";

export const authFetch = (userData: IUserTypes) => {
  return async (dispatch: Dispatch<UserActions>) => {
    if (!userData.email && !userData.password) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: "You should fill all fields!",
      });
      return;
    }
    try {
      dispatch({ type: AuthActionTypes.AUTH });

      await login(userData)
        .then((data) => {
          console.log(data);
          dispatch({
            type: AuthActionTypes.AUTH_SUCCESS,
            payload: data as IUser,
          });
        })
        .catch((e) =>
          dispatch({
            type: AuthActionTypes.AUTH_ERROR,
            payload: e.response.data.message,
          })
        );
    } catch (e) {
      const msg = e as Error;
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: msg.message,
      });
    }
  };
};

export const logOut = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: AuthActionTypes.AUTH_LOGOUT,
    });
    localStorage.removeItem("user");
  };
};
