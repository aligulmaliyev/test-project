import { useEffect } from "react";
import { ACCESS_TOKEN_KEY, BASE_URL } from "./const";
import axios, { InternalAxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const useAxios = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token: string | undefined | null =
          localStorage.getItem(ACCESS_TOKEN_KEY);

        if (token == null && !window.location.href.includes("login")) {
          navigate("/login");
          return Promise.reject(new Error());
        }

        if (Boolean(token)) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
      }
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (res) => res,
      async (res) => {
        if (res.response.status === 401) {
          window.localStorage.removeItem(ACCESS_TOKEN_KEY);
          navigate("/login");
        }

        return Promise.reject(res);
      }
    );
    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, []);

  return axiosInstance;
};

export default useAxios;
