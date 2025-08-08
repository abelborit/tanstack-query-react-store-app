import { useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../services/productById.actions";

export const useProductPrefetchQuery = () => {
  const queryClient = useQueryClient();

  const handlePreFetchProduct = (productId: string) => {
    queryClient.prefetchQuery({
      queryKey: ["products", { productId }],
      queryFn: () => getProductByIdAction({ productId }),
      staleTime: 1000 * 60 * 60, // 1 hora de staleTime
    });
  };

  return { handlePreFetchProduct };
};
