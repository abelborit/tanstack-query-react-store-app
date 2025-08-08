import { productsApi } from "../api/products.api";
import { type ProductInterface } from "../interfaces/products.interface";

interface GetProductByIdInterface {
  productId: string;
}

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

export const getProductByIdAction = async ({
  productId,
}: GetProductByIdInterface): Promise<ProductInterface> => {
  await sleep(2);

  const { data } = await productsApi.get<ProductInterface>(
    `/products/${productId}`
  );
  // console.log(response);

  return data;
};
