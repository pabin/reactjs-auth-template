import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3000/api/",
  timeout: 2000,
});

export default axiosInstance;
