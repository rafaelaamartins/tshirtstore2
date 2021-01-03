//frontend request to communicate with backend, axios library
import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://3333-ba506625-7368-46bb-94d8-292d3100f85c.ws-eu03.gitpod.io/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) { // check if user is logged in, insert Bearer token request
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
