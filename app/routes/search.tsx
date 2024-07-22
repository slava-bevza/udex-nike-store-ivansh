import { LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { getPaginatedProducts } from "~/lib/getPaginatedProducts";
import { pb } from "~/lib/pb";
import { PaginatedProductGrid } from "~/modules/Product";
import { MobileSearchInput } from "~/modules/Search";
import { IProduct, TProductsResponse } from "~/shared/interfaces";

export const loader: LoaderFunction = async ({ request }) => {
  const paginatedProducts = await getPaginatedProducts(request.url);
  const allProducts = await pb.collection("products").getFullList();
  return { paginatedProducts, allProducts };
};

export default function SearchPage() {
  const { paginatedProducts: initialProducts, allProducts } = useLoaderData<{
    paginatedProducts: TProductsResponse;
    allProducts: IProduct[];
  }>();
  const [products, setProducts] = useState<IProduct[]>(initialProducts.items);
  const fetcher = useFetcher<{ paginatedProducts: TProductsResponse }>();
  return (
    <div className="min-h-screen flex flex-col p-4 gap-4">
      <h1 className="text-3xl font-bold">Search for...</h1>
      <MobileSearchInput />
      <PaginatedProductGrid
        initialProducts={initialProducts}
        allProducts={allProducts}
        products={products}
        setProducts={setProducts}
        fetcher={fetcher}
        route="search"
      />
    </div>
  );
}
