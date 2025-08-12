import { productsApi } from "../api/products.api";
import {
  NewProductInterface,
  ProductInterface,
} from "../interfaces/products.interface";

interface CreateProductActionInterface {
  newProduct: NewProductInterface;
}

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const createProductAction = async ({
  newProduct,
}: CreateProductActionInterface) => {
  await sleep(4);

  // await sleep(6);
  // throw new Error("Error intencional al traer un producto");

  const { data } = await productsApi.post<ProductInterface>(
    `/products`,
    newProduct
  );
  // console.log(response);

  return data;
};
