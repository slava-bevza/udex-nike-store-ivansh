import { Link, useLocation, useSearchParams } from "@remix-run/react";
import React from "react";
import { getFilterUrl } from "~/lib/getFilterUrl";
import { cn } from "~/lib/utils";
import { IProduct } from "~/shared/interfaces";

interface Props {
  products: IProduct[];
  isMobile?: boolean;
}

export const PriceFiltering: React.FC<Props> = ({
  products,
  isMobile = false,
}) => {
  const params = useSearchParams()[0];
  const location = useLocation();

  const prices = products.map((product) => product.price);
  const minPrice = Math.floor(Math.min(...prices) / 5) * 5;
  const maxPrice = Math.ceil(Math.max(...prices) / 5) * 5;

  const step = 50;
  const priceRanges = [];

  for (let min = minPrice; min < maxPrice; min += step) {
    const max = min + step;
    priceRanges.push({ min, max });
  }

  if (priceRanges.length === 0) {
    return null;
  }

  return (
    <div
      className={cn("flex flex-col items-start py-2", isMobile && "border-b-2")}
    >
      <h2 className={cn("font-medium", isMobile ? "text-4xl" : "text-lg ")}>
        Price Filtering
      </h2>
      <ul>
        {priceRanges.map((range, index) => {
          const minFilter = { key: "min", value: String(range.min) };
          const maxFilter = { key: "max", value: String(range.max) };
          const url = getFilterUrl(params, location.pathname, [
            minFilter,
            maxFilter,
          ]);

          return (
            <li key={index}>
              <Link className={isMobile ? "text-2xl" : "text-base"} to={url}>
                ${range.min} - ${range.max}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
