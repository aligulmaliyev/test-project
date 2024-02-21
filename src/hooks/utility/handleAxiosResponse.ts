import { AxiosError, AxiosResponse } from "axios";

const handleResponse = <D>(response: AxiosResponse) => {
  return {
    data: response.data as D,
    error: null,
    status: response.status,
    statusText: response.statusText,
  };
};

const handleError = <D>(error: AxiosError) => {
  return {
    data: {} as D,
    error: error.response ? error.response.data : error.message,
    status: error.response ? error.response.status : 500,
    statusText: error?.response?.statusText,
  };
};

export const handleAxiosResponse = <D>(
  response: AxiosResponse | AxiosError
) => {
  console.log(response)
  if (response instanceof Error) {
    return handleError<D>(response);
  } else {
    return handleResponse<D>(response);
  }
};
