import { useQuery } from "@tanstack/react-query";
import { getAllProductsAction } from "../services/products.actions";

interface UseProductsQueryProps {
  filterKey?: string;
}

export const useProductsQuery = ({ filterKey }: UseProductsQueryProps) => {
  const productsQuery = useQuery({
    queryKey: ["products", { filterKey }],
    queryFn: () => getAllProductsAction({ filterKey }),
    staleTime: 1000 * 60 * 60, // 1 hora de staleTime
  });

  return { productsQuery };
};
