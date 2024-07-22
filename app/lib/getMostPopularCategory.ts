import { IProduct } from "~/shared/interfaces";

export function getMostPopularCategory(products: IProduct[]): string | null {
  const categoryCount: { [key: string]: number } = {};

  products.forEach((item) => {
    if (categoryCount[item.category]) {
      categoryCount[item.category]++;
    } else {
      categoryCount[item.category] = 1;
    }
  });

  let mostPopularCategory = null;
  let maxCount = 0;

  for (const category in categoryCount) {
    if (categoryCount[category] > maxCount) {
      mostPopularCategory = category;
      maxCount = categoryCount[category];
    }
  }

  return mostPopularCategory;
}
