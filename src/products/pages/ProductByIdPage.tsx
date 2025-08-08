import { useParams } from "react-router-dom";
import { useProductByIdQuery } from "../hooks/useProductByIdQuery";
import { ProductCard } from "../components/ProductCard";

export const ProductByIdPage = () => {
  const params = useParams();

  const { productByIdQuery } = useProductByIdQuery({
    productId: params["productId"] ?? "",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos</h1>

      {productByIdQuery.isLoading || productByIdQuery.isFetching ? (
        <span>Cargando...</span>
      ) : productByIdQuery.data ? (
        <ProductCard product={productByIdQuery.data} fullDescription />
      ) : (
        <span>- No hay productos disponibles -</span>
      )}
    </div>
  );
};
