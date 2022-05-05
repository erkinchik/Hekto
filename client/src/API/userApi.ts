import { $host } from "../utils/host";
import { IToken, IUserTypes } from "../types/userTypes";
import jwtDecode from "jwt-decode";
import { json } from "stream/consumers";

export const login = async (userData: IUserTypes) => {
  const { data } = await $host.post(`/user/login`, userData);
  const user = { ...(jwtDecode(data.token) as object), token: data.token };
  console.log(user);
  localStorage.setItem("token", data.token);
  return data;
};

export const check = async () => {
  const { data } = await $host.get("/user/auth");
  const user = JSON.parse(JSON.stringify(localStorage.getItem("user")));
  // localStorage.setItem("user", JSON.stringify({...user,token: data.token} );
};
