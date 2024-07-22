import { IPaginated, IProduct } from "~/shared/interfaces";
import { pb } from "./pb";
import { getQueryFromSearchParams } from "./getQueryFromSearchParams";

export const getPaginatedProducts = async (
  requestUrl: string,
  filter?: string
) => {
  const url = new URL(requestUrl);
  const page = url.searchParams.get("page") || 0;
  const { searchParams } = url;

  const queryFromParams = getQueryFromSearchParams(searchParams);
  console.log({ fromParams: queryFromParams });

  let query = "";
  if (filter && queryFromParams) {
    query = `${filter}&${queryFromParams}`;
  } else if (filter) {
    query = filter;
  } else if (queryFromParams) {
    query = queryFromParams;
  }

  // Formatting query to make pocketbase read it properly
  query = query.replaceAll("&", " && ");
  query = query.replace("min=", "price>=");
  query = query.replace("max=", "price<=");
  console.log({ query });

  const paginatedProducts: IPaginated<IProduct> = await pb
    .collection("products")
    .getList(+page, 20, {
      filter: query,
    });

  return paginatedProducts;
};
