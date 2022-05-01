import { $host } from "../utils/host";
import { IToken, IUserTypes } from "../types/userTypes";

export const auth = async (userData: IUserTypes) => {
  const { data } = await $host.post(`/user/login`, userData);
  return data;
};
