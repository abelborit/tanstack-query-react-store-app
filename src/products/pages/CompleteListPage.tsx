import { ProductList } from "..";
import { useProductsQuery } from "../hooks/useProductsQuery";

export const CompleteListPage = () => {
  const { productsQuery } = useProductsQuery({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {productsQuery.isLoading || productsQuery.isFetching ? (
        <span>Cargando...</span>
      ) : (
        <ProductList products={productsQuery.data || []} />
      )}
    </div>
  );
};
