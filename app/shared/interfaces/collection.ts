import { IProduct } from "./";

export interface ICollection {
  id: string;
  product: IProduct;
  size: number;
}
