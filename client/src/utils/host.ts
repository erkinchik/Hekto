import axios from "axios";

export const $host = axios.create({
  baseURL: process.env.REACT_APP_PORT_API,
});