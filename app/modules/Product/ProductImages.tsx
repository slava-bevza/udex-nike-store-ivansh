import React from "react";
import { IProduct } from "~/shared/interfaces/product";
import { ProductCarousel } from "./ProductCarousel";

interface Props {
  product: IProduct;
}

export const ProductImages: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="lg:hidden py-4">
        <ProductCarousel product={product} />
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {product.images.map((image) => (
          <img
            key={image}
            src={`http://ivs-nikestore-pb.apps.aiweb.cloud/api/files/${product.collectionId}/${product.id}/${image}`}
            className="max-w-[524px] w-full object-cover"
          />
        ))}
      </div>
    </>
  );
};
