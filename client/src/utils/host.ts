import axios from "axios";
import { IUser } from "../types/storeTypes/userTypes";

//@ts-ignore
const token = JSON.parse(localStorage.getItem("user"))?.token;

const $host = axios.create({
  baseURL: process.env.REACT_APP_PORT_API,
});
const $authHost = axios.create({
  baseURL: process.env.REACT_APP_PORT_API,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${token}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
