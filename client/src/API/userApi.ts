import { $authHost, $host } from "../utils/host";
import { IToken, IUserTypes } from "../types/userTypes";
import jwtDecode from "jwt-decode";
import { json } from "stream/consumers";

export const login = async (userData: IUserTypes) => {
  const { data } = await $host.post<IToken>(`/user/login`, userData);
  const user = {
    ...(jwtDecode(data.token) as object),
    token: data.token,
  };
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};
export const registration = async (userData: IUserTypes) => {
  const { data } = await $host.post<IToken>(`/user/registration`, userData);
  return data.token;
};

export const check = async () => {
  const { data } = await $authHost.get("/user/auth");
  //@ts-ignore
  const user = JSON.parse(localStorage.getItem("user"));
  localStorage.setItem("user", JSON.stringify({ ...user, token: data.token }));
  return jwtDecode(data.token);
};
