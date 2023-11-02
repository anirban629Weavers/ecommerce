import { BASE_URL } from "@/configs/url.config";
import axios from "axios";

const axiosApiInstance = (
  headers: object = { "Content-Type": "application/json" }
) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers,
    timeout: 1000,
    withCredentials: true,
  });

  return axiosInstance;
};

export default axiosApiInstance;
