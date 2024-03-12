import axios from "axios";

const api_uri = "http://localhost:8181";

export const login = (data) => axios.post(`${api_uri}/api/v1/auth/login`, data);
export const register = (data) =>
  axios.post(`${api_uri}/api/v1/auth/register`, data);

export const logout = () => instance.post(`${api_uri}/api/v1/auth/logout`);
export const forgotPassword = () =>
  axios.patch(`${api_uri}/api/v1/auth/forgotPassword`, data);

export const queryPost = (data) =>
  axios.post(`${api_uri}/api/v1/auth/save/enquiry`, data);

export const queryGetAll = (data) =>
  axios.get(`${api_uri}/api/v1/auth/getAllQuery`, data);

export const profilepost = (data) =>
  axios.post(`${api_uri}/api/v1/auth/profile`, data);

export const profilePatch = (id, data) => {
  return axios.patch(`${api_uri}/api/v1/auth/profile/patch/${id}`, data);
};

export const GetAllQuery = () => {
  return axios.get(`${api_uri}/api/v1/auth/getAllQuery`); // Return the axios GET request
};

export const QueryReply = (email, data) => {
  return axios.put(`${api_uri}/api/v1/auth/querydata/${email}`, data);
};
export const GetStatusByEmail = (email) => {
  return axios.get(`${api_uri}/api/v1/auth/querydata/email/${email}`);
};

export const AddCourse = (course) => {
  return axios.post(`${api_uri}/api/v1/auth/save/courses`, course);
};
export const getCourses = () => {
  return axios.get(`${api_uri}/api/v1/auth/get/all`);
};
export const getProfileDetails = (email) => {
  return axios.get(`${api_uri}/api/v1/auth/profile/${email}`);
};

export const patchProfile = (id, data) => {
  return axios.patch(`${api_uri}/api/v1/auth/profile/patch/${id}`, data);
};

export const getAllUser = () => {
  return axios.get(`/${api_uri}/api/v1/auth/all`);
};

export const paymentDetails = () => {
  return axios.get(`/${api_uri}/api/v1.auth/get`);
};
