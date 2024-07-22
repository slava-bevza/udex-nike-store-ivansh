import { ActionFunctionArgs } from "@remix-run/node";
import { redirect, useActionData, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import {
  addToCart,
  addToWish,
  deleteFromCart,
  getCart,
  getWish,
} from "~/actions";
import { deleteFromWish } from "~/actions/deleteFromWish";
import { getRecommendations } from "~/actions/getRecommendations";
import { pb } from "~/lib/pb";
import { toast } from "~/lib/use-toast";
import { Bag, Favourites, Recommendations } from "~/modules/Cart";
import { ICollection, IProduct, IUser } from "~/shared/interfaces";

export const loader = async () => {
  const user = pb.authStore.model;
  if (!user) return redirect("/sign-in");

  const cart = await getCart(user as IUser);
  const wish = await getWish(user as IUser);

  const cartProducts = cart.map((item) => item.product);
  const wishProducts = wish.map((item) => item.product);

  const recommendations = await getRecommendations(
    cartProducts.concat(wishProducts)
  );

  return { cart, wish, recommendations };
};

export default function Cart() {
  const { cart, wish, recommendations } = useLoaderData<{
    cart: ICollection[];
    wish: ICollection[];
    recommendations: IProduct[];
  }>();
  const action = useActionData<{ title: string; description: string }>();

  useEffect(() => {
    console.log({ action });
    if (action?.title && action.description) {
      toast({
        title: action.title,
        description: action.description,
      });
    }
  }, [action, toast]);

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Bag */}
      <Bag cart={cart} />

      {/* Favourites */}
      <Favourites wishlist={wish} />

      {/* You might also like */}
      <Recommendations recommendations={recommendations} />
    </div>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");
  const recordId = formData.get("recordId");
  const productId = formData.get("productId");
  const size = formData.get("size");
  const user = pb.authStore.model;

  if (actionType === "addToWish") {
    return addToWish(String(productId), Number(size), user as IUser);
  }

  if (actionType === "addToCart") {
    return addToCart(String(productId), Number(size), user as IUser);
  }

  if (actionType === "deleteFromWish") {
    return deleteFromWish(String(recordId));
  }

  if (actionType === "deleteFromCart") {
    return deleteFromCart(String(recordId));
  }
};
