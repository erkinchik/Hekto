import { IDataBody } from "../types/productTypes";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/paths";

export const loginBody: IDataBody = {
  title: "Login",
  subtitle: "Please login using account detail bellow.",
  fromText: "Don’t have an Account?Create account",
  btnText: "Sign in",
  linkTo: REGISTRATION_ROUTE,
};

export const registrationBody: IDataBody = {
  title: "Registration",
  subtitle: "Please Register using account detail bellow.",
  fromText: "Already have an account?Login",
  btnText: "Sign up",
  linkTo: LOGIN_ROUTE,
};
