import { ProductCard } from "..";
import { ProductInterface } from "../interfaces/products.interface";

interface ProductListProps {
  products: ProductInterface[];
}

export const ProductList = ({ products = [] }: ProductListProps) => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {products.length > 0 ? (
        products.map((element) => (
          <ProductCard key={element.id} product={element} />
        ))
      ) : (
        <span>No hay productos disponibles</span>
      )}
    </div>
  );
};
