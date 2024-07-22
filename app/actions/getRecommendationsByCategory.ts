import { pb } from "~/lib/pb";
import { IPaginated, IProduct } from "~/shared/interfaces";

export const getRecommendationsByCategory = async (category: string) => {
  try {
    const { items: products }: IPaginated<IProduct> = await pb
      .collection("products")
      .getList(1, 8, {
        filter: `category="${category}"`,
      });

    return products;
  } catch (error) {
    return [];
  }
};
