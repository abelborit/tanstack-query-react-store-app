import { useMutation } from "@tanstack/react-query";
import { createProductAction } from "../services/createProduct.actions";

export const useCreateProductMutation = () => {
  const productMutation = useMutation({
    mutationFn: createProductAction,
    onSuccess: (data, variables, context) => {
      console.log("onSuccess", { data, variables, context });
    },
    onSettled: (data, error, variables, context) => {
      console.log("onSettled", { data, error, variables, context });
    },
  });

  return { productMutation };
};
