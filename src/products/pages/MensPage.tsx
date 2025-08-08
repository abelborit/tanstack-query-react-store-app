import { ProductList } from "..";
import { useProductsQuery } from "../hooks/useProductsQuery";

export const MensPage = () => {
  const { productsQuery } = useProductsQuery({
    filterKey: "men's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {productsQuery.isLoading || productsQuery.isFetching ? (
        <span>Cargando...</span>
      ) : (
        <ProductList products={productsQuery.data || []} />
      )}
    </div>
  );
};
