import React from "react";
import { IProduct } from "~/shared/interfaces";
import { ProductsCarousel } from "./ProductsCarousel";

interface Props {
  recommendations: IProduct[];
}

export const Recommendations: React.FC<Props> = ({ recommendations }) => {
  if (recommendations.length === 0) {
    return;
  }

  return (
    <div className="flex flex-col max-w-[1200px] px-4">
      <h4 className="font-medium text-xl">You might also like</h4>
      <ProductsCarousel products={recommendations} />
    </div>
  );
};
