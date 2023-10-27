import axios from "axios";

const axiosApiInstance = (
  headers: object = { "Content-Type": "application/json" }
) => {
  const axiosInstance = axios.create({
    baseURL: process.env.BASE_URL,
    headers,
    timeout: 1000,
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use(
    function (config: any) {
      return config;
    },
    function (error: any) {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default axiosApiInstance;
