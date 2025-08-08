import { useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../services/productById.actions";

interface UseProductsQueryProps {
  productId: string;
}

export const useProductByIdQuery = ({ productId }: UseProductsQueryProps) => {
  const productByIdQuery = useQuery({
    queryKey: ["products", { productId }],
    queryFn: () => getProductByIdAction({ productId }),
    staleTime: 1000 * 60 * 60, // 1 hora de staleTime
  });

  return { productByIdQuery };
};
