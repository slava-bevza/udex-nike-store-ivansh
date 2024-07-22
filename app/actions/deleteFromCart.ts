import { pb } from "~/lib/pb";

export const deleteFromCart = async (cartId: string) => {
  return pb.collection("cart").delete(cartId);
};
