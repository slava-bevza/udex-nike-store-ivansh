import { Link } from "@remix-run/react";
import React from "react";
import { cn, fromStringToArray, getSizeLink } from "~/lib/utils";
import { IProduct } from "~/shared/interfaces";

interface Props {
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
  product: IProduct;
}

export const ProductSizes: React.FC<Props> = ({
  product,
  selectedSize,
  setSelectedSize,
}) => {
  const sizes = fromStringToArray(product.sizes);
  const onSizeClick = (size: string) => {
    if (!product.sizesAvalaible.includes(size)) {
      return;
    }
    setSelectedSize(size);
  };

  return (
    <>
      <div className="flex justify-between">
        <p className="font-medium">Select Size</p>
        <Link to={getSizeLink(product.category)} className="text-[#757575]">
          Size Guide
        </Link>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 gap-2">
        {sizes.map((size) => (
          <div
            key={size}
            className={cn(
              "rounded-md p-3 text-md border border-[#E5E5E5]  transition-colors",
              product.sizesAvalaible.includes(size)
                ? "cursor-pointer hover:border-black"
                : "text-[#dddddd] hover:cursor-not-allowed",
              selectedSize === size ? "border-black" : "border-[#E5E5E5]"
            )}
            onClick={() => onSizeClick(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </>
  );
};
