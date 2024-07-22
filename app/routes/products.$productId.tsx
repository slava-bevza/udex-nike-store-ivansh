import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { addToCart, addToWish } from "~/actions";
import { getRecommendations } from "~/actions/getRecommendations";
import { pb } from "~/lib/pb";
import { useToast } from "~/lib/use-toast";
import {
  ProductDetailsAccordion,
  ProductDetailsDialog,
  ProductImages,
  ProductShowcase,
  ProductSizes,
} from "~/modules";
import { Recommendations } from "~/modules/Cart";
import { IProduct } from "~/shared/interfaces/";
import { IUser } from "~/shared/interfaces/user";
import { Button } from "~/shared/ui";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { productId } = params;
  if (!productId) return redirect("/");

  const product: IProduct = await pb.collection("products").getOne(productId);
  const recommendations = await getRecommendations([product]);

  return json({ product, recommendations });
};

export default function ProductDetailPage() {
  const { product, recommendations } = useLoaderData<{
    product: IProduct;
    recommendations: IProduct[];
  }>();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const action = useActionData<{ title: string; description: string }>();
  const { toast } = useToast();

  useEffect(() => {
    if (action?.title && action.description) {
      toast({
        title: action.title,
        description: action.description,
      });
    }
  }, [action, toast]);

  return (
    <div className="flex flex-col min-h-screen px-16 py-24 overflow-hidden gap-8  ">
      <div className="flex flex-col lg:flex-row  lg:gap-8 2xl:gap-36">
        <ProductImages product={product} />
        <div className="flex w-full lg:w-1/4 flex-col gap-8">
          <div>
            <h1 className="text-xl sm:text-3xl">{product.title}</h1>
            <p className="leading-6 font-medium">{product.category}</p>
          </div>
          <div>
            <p className="leading-6 font-medium">
              USD : ${product.price.toFixed(2).toLocaleString()}
            </p>
            <div className="flex flex-col text-[#757575] mt-2 gap-1">
              <p>incl. of taxes</p>
              <p>(Also includes all applicable duties)</p>
            </div>
          </div>
          <div>
            <ProductSizes
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              product={product}
            />
            <Form method="post">
              <input type="hidden" value={product.id} name="productId" />
              <input
                type="hidden"
                value={selectedSize || undefined}
                name="size"
              />
              <Button
                type="submit"
                className="rounded-full my-4 w-full py-8 text-lg hover:opacity-70"
                name="_action"
                value="cart"
              >
                Add to Bag
              </Button>
              <Button
                type="submit"
                className="w-full my-4 rounded-full py-8 text-lg bg-white text-black border hover:border-black "
                name="_action"
                value="wishlist"
              >
                Favourite
              </Button>
            </Form>
          </div>
          <div className="flex flex-col mt-8 leading-7 gap-8">
            {product.description && <p>{product.description}</p>}
            <ProductDetailsDialog product={product} />
            <ProductDetailsAccordion />
          </div>
        </div>
      </div>
      <ProductShowcase product={product} />
      <Recommendations recommendations={recommendations} />
    </div>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const productId = formData.get("productId");
  const size = formData.get("size");
  const actionType = formData.get("_action");

  const user = pb.authStore.model;
  if (!user) return redirect("/sign-in");

  if (actionType === "cart") {
    return addToCart(productId as string, Number(size), user as IUser);
  }

  if (actionType === "wishlist") {
    return addToWish(productId as string, Number(size), user as IUser);
  }

  return null;
};
