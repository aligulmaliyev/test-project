import { AxiosRequestConfig, AxiosError } from "axios";
import useAxios from "./useAxios";
import { handleAxiosResponse } from "../utility/handleAxiosResponse";

export const useCoreService = () => {
  const axiosInstance = useAxios();
  const getRequest = async <Res>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosInstance.get<Res>(url, config);
      return handleAxiosResponse<Res>(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      return handleAxiosResponse<Res>(axiosError);
    }
  };

  const postRequest = async <Req, Res>(
    url: string,
    data: Req = {} as Req,
    config?: AxiosRequestConfig
  ) => {
    try {
      const response = await axiosInstance.post<Res>(url, data, config);
      return handleAxiosResponse<Res>(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      return handleAxiosResponse<Res>(axiosError);
    }
  };

  const putRequest = async <Req, Res>(
    url: string,
    data: Req = {} as Req,
    config?: AxiosRequestConfig
  ) => {
    try {
      const response = await axiosInstance.put<Res>(url, data, config);
      return handleAxiosResponse<Res>(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      return handleAxiosResponse<Res>(axiosError);
    }
  };

  const deleteRequest = async <Res>(
    url: string,
    config?: AxiosRequestConfig
  ) => {
    try {
      const response = await axiosInstance.delete<Res>(url, config);
      return handleAxiosResponse<Res>(response);
    } catch (error) {
      const axiosError = error as AxiosError;
      return handleAxiosResponse<Res>(axiosError);
    }
  };
  return {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
  };
};
