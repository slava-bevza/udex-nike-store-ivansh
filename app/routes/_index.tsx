import { LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useFetcher, useLoaderData, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getPaginatedProducts } from "~/lib/getPaginatedProducts";
import { getQueryFromSearchParams } from "~/lib/getQueryFromSearchParams";
import { pb } from "~/lib/pb";
import { useToast } from "~/lib/use-toast";
import { PaginatedProductGrid } from "~/modules/Product";
import { IProduct, TProductsResponse } from "~/shared/interfaces";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const paginatedProducts = await getPaginatedProducts(request.url);
  const allProducts = await pb.collection("products").getFullList();
  return { paginatedProducts, allProducts };
};

export default function Index() {
  const { paginatedProducts: initialProducts, allProducts } = useLoaderData<{
    paginatedProducts: TProductsResponse;
    allProducts: IProduct[];
  }>();
  const [products, setProducts] = useState<IProduct[]>(initialProducts.items);
  const fetcher = useFetcher<{ paginatedProducts: TProductsResponse }>();

  const { toast } = useToast();
  const searchParams = useSearchParams()[0];
  const isSuccess = searchParams.get("success");

  const query = getQueryFromSearchParams(searchParams).replaceAll(`"`, "");

  useEffect(() => {
    setProducts(initialProducts.items);
  }, [initialProducts]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Log In",
        description: "Successfully logged in.",
      });
    }
  }, [isSuccess, toast]);

  return (
    <PaginatedProductGrid
      initialProducts={initialProducts}
      allProducts={allProducts}
      products={products}
      setProducts={setProducts}
      fetcher={fetcher}
      route={`index&${query}`}
    />
  );
}
