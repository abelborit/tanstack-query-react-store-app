import { productsApi } from "../api/products.api";
import { type ProductInterface } from "../interfaces/products.interface";

interface GetProductsInterface {
  filterKey?: string;
}

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const getAllProductsAction = async ({
  filterKey,
}: GetProductsInterface) => {
  await sleep(2);

  const filterParam = filterKey ? `category=${filterKey}` : "";

  const { data } = await productsApi.get<ProductInterface[]>(
    `/products?${filterParam}`
  );
  // console.log(response);

  return data;
};
