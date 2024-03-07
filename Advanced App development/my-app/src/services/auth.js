import axios from "axios";

const api_uri = "http://localhost:8181";

export const login = (data) =>
  axios.post(`${api_uri}/api/v1/aauth/login`, data);
export const register = (data) =>
  axios.post(`${api_uri}/api/v1/auth/register`, data);

export const logout = () => instance.post(`${api_uri}/api/v1/auth/logout`);
export const forgotPassword = () =>
  axios.patch(`${api_uri}/api/v1/auth/forgotPassword`, data);