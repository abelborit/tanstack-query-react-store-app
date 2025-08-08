import { productsApi } from "../api/products.api";
import { type ProductInterface } from "../interfaces/products.interface";

interface GetProductsInterface {
  filterKey?: string;
}

export const getAllProductsAction = async ({ filterKey }: GetProductsInterface) => {
  const { data } = await productsApi.get<ProductInterface[]>("/products");
  // console.log(response);

  return data;
};
