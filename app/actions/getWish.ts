import { pb } from "~/lib/pb";
import { ICollection, IProduct, IUser, IWish } from "~/shared/interfaces";

export const getWish = async (user: IUser): Promise<ICollection[]> => {
  const favourites: IWish[] = await pb.collection("favourites").getFullList({
    filter: `userId="${user.id}"`,
  });

  if (!favourites) return [];

  const wish = await Promise.all(
    favourites.map(async (favourite) => {
      const product: IProduct = await pb
        .collection("products")
        .getOne(favourite.productId);
      return { id: favourite.id, product, size: favourite.size };
    })
  );

  return wish;
};
