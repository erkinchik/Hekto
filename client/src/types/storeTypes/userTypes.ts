import { IProducts } from "../productTypes";
import { IToken } from "../userTypes";

export enum AuthActionTypes {
  AUTH = "AUTH",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_ERROR = "AUTH_ERROR",
  AUTH_LOGOUT = "AUTH_LOGOUT",
}
export interface IUser {
  email: string;
  exp: number | symbol | bigint;
  iat: number | symbol | bigint;
  id: number | string;
  role: string;
  token: string | null | symbol;
}
export interface AuthState {
  user: IUser | null;
  loading: boolean;
  error: null | string | object;
}
interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS;
  payload: IUser | null;
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
