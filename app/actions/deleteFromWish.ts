import { pb } from "~/lib/pb";

export const deleteFromWish = async (wishId: string) => {
  return pb.collection("favourites").delete(wishId);
};
