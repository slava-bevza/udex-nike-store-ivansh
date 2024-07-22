import { IProduct } from "~/shared/interfaces";

export const getGender = (product: IProduct) => {
  if (product.category.includes("Men")) {
    return "Men";
  }
  return "Women";
};
