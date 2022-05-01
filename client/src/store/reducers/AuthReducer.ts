import {
  AuthActionTypes,
  AuthState,
  UserActions,
} from "../../types/storeTypes/userTypes";

const initialState: AuthState = {
  token: "" || localStorage.getItem("token"),
  loading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: UserActions
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      return { loading: false, error: null, token: null };
    case AuthActionTypes.AUTH_SUCCESS:
      return { loading: false, error: null, token: action.payload };
    case AuthActionTypes.AUTH_ERROR:
      return { loading: false, error: action.payload, token: null };
    case AuthActionTypes.AUTH_LOGOUT:
      return { loading: false, error: null, token: null };
    default:
      return state;
  }
};
