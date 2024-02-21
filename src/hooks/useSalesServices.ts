import { useCoreService } from "./core/useCoreService";
import { useNotify } from "./core/useNotify";
import { TSales } from "../types/sales";

export const useSalesServices = () => {
  const { errorToast } = useNotify();
  const { getRequest, postRequest, putRequest, deleteRequest } =
    useCoreService();

  const getSales = async () => {
    const response = await getRequest<TSales>("/sales");
    if (response.error) errorToast();

    return response;
  };

  const postSales = async (data: TSales) => {
    const response = await postRequest<TSales, TSales>("/sales", data);
    if (response.error) errorToast();

    return response;
  };

  const putSales = async (data: TSales) => {
    const response = await putRequest<TSales, TSales>(
      `/sales/${data?.id}`,
      data
    );
    if (response.error) errorToast();

    return response;
  };

  const deleteSales = async (data: TSales) => {
    const response = await deleteRequest<TSales>(`/sales/${data?.id}`);
    if (response.error) errorToast();

    return response;
  };

  return {
    getSales,
    postSales,
    putSales,
    deleteSales,
  };
};
