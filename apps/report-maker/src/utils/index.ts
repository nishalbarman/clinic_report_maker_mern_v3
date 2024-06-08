import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const handleGlobalError = (error: unknown) => {
  if (error) {
    console.error(error);
    if (error instanceof AxiosError)
      toast.error(error.response?.data?.message || "Unknown error occured!");
    else toast.error((error as Error)?.message || "Unknown error occured!");
  }
};
