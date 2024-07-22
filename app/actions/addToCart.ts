import { json, redirect } from "@remix-run/react";
import { pb } from "~/lib/pb";
import { ICart, IUser } from "~/shared/interfaces";

export const addToCart = async (
  productId: string,
  size: number,
  user: IUser
) => {
  if (!size)
    return json({
      title: "Something went wrong!",
      description: "Please select a size",
    });

  try {
    const query = `userId="${user.id}" && productId="${productId}"`;
    // Search for an existing cart
    const existingCart: ICart[] = await pb.collection("cart").getFullList({
      filter: query,
    });
    // If item is already in cart, do nothing
    if (existingCart.length > 0) {
      if (existingCart[0].size !== Number(size)) {
        await pb.collection("cart").update(existingCart[0].id, {
          size,
        });
        return json({
          title: "OK!",
          description: "This product is already in cart. Size updated.",
        });
      }
      return json({
        title: "OK!",
        description: "This product is already in cart.",
      });
    }
    await pb.collection("cart").create({
      productId,
      userId: user.id,
      size,
    });
  } catch (error) {
    console.log(JSON.stringify(error));
    return json({ title: "Oops!", description: "Something went wrong" });
  }

  // Add cart drawer
  return json({ title: "Success!", description: "Product added to cart" });
};
