import { pb } from "~/lib/pb";
import { ICart, ICollection, IProduct, IUser } from "~/shared/interfaces";

export const getCart = async (user: IUser): Promise<ICollection[]> => {
  const carts: ICart[] = await pb.collection("cart").getFullList({
    filter: `userId="${user.id}"`,
  });

  if (!carts) return [];

  const cart = await Promise.all(
    carts.map(async (cart) => {
      const product: IProduct = await pb
        .collection("products")
        .getOne(cart.productId);
      return { id: cart.id, product, size: cart.size };
    })
  );

  return cart;
};
