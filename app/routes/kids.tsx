import { LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getPaginatedProducts } from "~/lib/getPaginatedProducts";
import { pb } from "~/lib/pb";
import { PaginatedProductGrid } from "~/modules/Product";
import { IProduct, TProductsResponse } from "~/shared/interfaces";

export const loader: LoaderFunction = async ({ request }) => {
  const filter = `category~"Kids"`;
  const paginatedProducts = await getPaginatedProducts(request.url, filter);
  const allProducts = await pb.collection("products").getFullList({
    filter,
  });
  return { paginatedProducts, allProducts };
};

export default function KidsProducts() {
  const { paginatedProducts: initialProducts, allProducts } = useLoaderData<{
    paginatedProducts: TProductsResponse;
    allProducts: IProduct[];
  }>();
  const [products, setProducts] = useState<IProduct[]>(initialProducts.items);
  const fetcher = useFetcher<{ paginatedProducts: TProductsResponse }>();

  return (
    <PaginatedProductGrid
      initialProducts={initialProducts}
      allProducts={allProducts}
      products={products}
      setProducts={setProducts}
      fetcher={fetcher}
      route="kids"
    />
  );
}
