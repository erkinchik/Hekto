import {
  AuthActionTypes,
  AuthState,
  UserActions,
} from "../../types/storeTypes/userTypes";

const initialState: AuthState = {
  //@ts-ignore
  user: null || JSON.parse(localStorage.getItem("user")),
  loading: false,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: UserActions
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.AUTH:
      return { loading: false, error: null, user: null };
    case AuthActionTypes.AUTH_SUCCESS:
      return { loading: false, error: null, user: action.payload };
    case AuthActionTypes.AUTH_ERROR:
      return { loading: false, error: action.payload, user: null };
    case AuthActionTypes.AUTH_LOGOUT:
      return { loading: false, error: null, user: null };
    default:
      return state;
  }
};
