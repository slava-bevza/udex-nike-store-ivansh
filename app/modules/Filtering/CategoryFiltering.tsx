import { useLocation, useSearchParams } from "@remix-run/react";
import React from "react";
import { getFilterUrl } from "~/lib/getFilterUrl";
import { cn } from "~/lib/utils";
import { IProduct } from "~/shared/interfaces";

interface Props {
  products: IProduct[];
  isMobile?: boolean;
}

export const CategoryFiltering: React.FC<Props> = ({
  products,
  isMobile = false,
}) => {
  // unique categories
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const [params, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const activeCategory = params.get("category") || "";

  const handleCategoryClick = (category: string) => {
    const filter = { key: "category", value: category };
    const url = getFilterUrl(params, pathname, [filter]);
    setSearchParams(new URLSearchParams(url.split("?")[1]));
  };

  return (
    <div
      className={cn("flex flex-col items-start py-2", isMobile && "border-b-2")}
    >
      <h2 className={cn("font-medium", isMobile ? "text-4xl" : "text-lg ")}>
        Category Filtering
      </h2>
      {categories.map((category) => (
        <button
          key={category}
          className={cn(
            "text-zinc-500 underline-offset-4 hover:text-black hover:underline text-nowrap ",
            activeCategory === category ? "text-black underline" : "",
            isMobile ? "text-2xl" : "text-base"
          )}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
