import { IProducts } from "../productTypes";
import { IToken } from "../userTypes";

export enum AuthActionTypes {
  AUTH = "AUTH",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_ERROR = "AUTH_ERROR",
  AUTH_LOGOUT = "AUTH_LOGOUT",
}
interface IUser {
  email: string;
  exp: number | symbol | bigint;
  iat: number | symbol | bigint;
  id: number | symbol;
  role: string;
  token: string | null;
}
export interface AuthState {
  token: null | string;
  loading: boolean;
  error: null | string | object;
}
interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: string;
}

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR;
  payload: string;
}
interface AuthAction {
  type: AuthActionTypes.AUTH;
}
interface AuthLogoutAction {
  type: AuthActionTypes.AUTH_LOGOUT;
}
export type UserActions =
  | AuthAction
  | AuthErrorAction
  | AuthSuccessAction
  | AuthLogoutAction;