import { ToastPosition, useToast } from "@chakra-ui/react";

type TToastConfig = {
  title: string;
  description: string;
  status: "success" | "info" | "warning" | "error" | "loading";
  position: ToastPosition;
  duration: number;
};

export const useNotify = () => {
  const toast = useToast();
  const successToast = (config?: Partial<TToastConfig>) => {
    toast({
      title: config?.title ?? "Uğurlu!",
      description: config?.description ?? "",
      status: "success",
      position: config?.position ?? "top-right",
      duration: config?.duration ?? 3000,
    });
  };

  const errorToast = (config?: Partial<TToastConfig>) => {
    toast({
      title: config?.title ?? "Xəta",
      description: config?.description ?? "Xəta baş verdi.",
      status: "error",
      position: config?.position ?? "bottom-right",
      duration: config?.duration ?? 3000,
    });
  };

  return { successToast, errorToast };
};
