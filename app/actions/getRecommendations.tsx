import { getMostPopularCategory } from "~/lib/getMostPopularCategory";
import { pb } from "~/lib/pb";
import { IProduct } from "~/shared/interfaces";

export const getRecommendations = async (
  products: IProduct[]
): Promise<IProduct[]> => {
  const mostPopularCategory = getMostPopularCategory(products);
  console.log(mostPopularCategory);

  if (!mostPopularCategory) {
    return [];
  }

  try {
    const idsToExclude = products.map((product) => product.id);

    const productsByCategory: IProduct[] = await pb
      .collection("products")
      .getFullList({
        filter: `category="${mostPopularCategory}"`,
      });

    const filteredProducts = productsByCategory.filter(
      (product) => !idsToExclude.includes(product.id)
    );

    return filteredProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
