import axios from "axios";
import { BASE_URL } from "../utils/constant/constant-api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API ERROR: ", error.response?.data || error.message);
    return Promise.reject(error);
  },
);
