import { Dispatch } from "redux";
import { UserActions, AuthActionTypes } from "../../types/storeTypes/userTypes";
import { IToken, IUserTypes } from "../../types/userTypes";
import { auth } from "../../API/userApi";

export const authFetch = (userData: IUserTypes) => {
  return async (dispatch: Dispatch<UserActions>) => {
    if (!userData.email && !userData.password) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: " You should fill all fields!",
      });
      return;
    }
    try {
      dispatch({ type: AuthActionTypes.AUTH });
      const data = await auth(userData).catch((e) =>
        dispatch({
          type: AuthActionTypes.AUTH_ERROR,
          payload: e.response.data.message,
        })
      );
      if (data?.token) {
        localStorage.setItem("token", data.token);
        dispatch({
          type: AuthActionTypes.AUTH_SUCCESS,
          payload: data.token,
        });
      }
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
    localStorage.removeItem("token");
  };
};
