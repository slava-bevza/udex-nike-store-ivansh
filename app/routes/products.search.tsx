import { LoaderFunction } from "@remix-run/node";
import {
  redirect,
  useFetcher,
  useLoaderData,
  useSearchParams,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import { getRecommendationsByCategory } from "~/actions";
import { getPaginatedProducts } from "~/lib/getPaginatedProducts";
import { pb } from "~/lib/pb";
import { PaginatedProductGrid } from "~/modules";
import { Recommendations } from "~/modules/Cart";
import { IProduct, TProductsResponse } from "~/shared/interfaces";

export const loader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");

  if (!query) {
    return redirect("/");
  }

  const filter = query.includes("Men")
    ? `title~"${query}" && title!~"Women" || category~"${query}"`
    : `title~"${query}" || category~"${query}"`;

  const paginatedProducts = await getPaginatedProducts(request.url, filter);
  console.log({ paginatedProducts: paginatedProducts.items });

  const allProducts = await pb.collection("products").getFullList({
    filter,
  });

  // TODO: Get recommendations by the most popular
  const recommendations = await getRecommendationsByCategory("Men's Shoes");

  return { paginatedProducts, recommendations, allProducts };
};

export default function productsSearch() {
  const {
    paginatedProducts: initialProducts,
    recommendations,
    allProducts,
  } = useLoaderData<{
    paginatedProducts: TProductsResponse;
    recommendations: IProduct[];
    allProducts: IProduct[];
  }>();
  const [products, setProducts] = useState<IProduct[]>(initialProducts.items);
  const fetcher = useFetcher<{ paginatedProducts: TProductsResponse }>();
  const searchParams = useSearchParams()[0];
  const query = searchParams.get("q") || "";

  useEffect(() => {
    setProducts(initialProducts.items);
  }, [initialProducts]);

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center py-12 gap-36">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl text-center font-medium">
            We could not find anything for "{query}"
          </h1>
          <p className="text-xl text-center">
            These popular items might interest you
          </p>
        </div>
        <Recommendations recommendations={recommendations} />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold p-4 text-center">
        Results for "{query}"
      </h1>
      <PaginatedProductGrid
        initialProducts={initialProducts}
        allProducts={allProducts}
        products={products}
        setProducts={setProducts}
        fetcher={fetcher}
        route={`products/search&q=${query}`}
        isPadding={false}
      />
    </div>
  );
}
