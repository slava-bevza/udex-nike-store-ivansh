import React from "react";
import { fromStringToArray } from "~/lib/utils";
import { IProduct } from "~/shared/interfaces/product";

interface Props {
  product: IProduct;
}

export const ProductShowcase: React.FC<Props> = ({ product }) => {
  const showcaseComments = fromStringToArray(product.showcaseComments);
  return (
    <div className="flex flex-col gap-36 items-center">
      {product.showcase.map((image, index) => (
        <div className="space-y-14" key={image}>
          <p className="text-center text-lg max-w-[582px] mx-auto">
            {showcaseComments[index]}
          </p>
          <img
            src={`http://ivs-nikestore-pb.apps.aiweb.cloud/api/files/${product.collectionId}/${product.id}/${image}`}
            className="w-full object-cover"
          />
        </div>
      ))}
      <p className="text-center text-lg max-w-[582px] mx-auto">
        {showcaseComments[showcaseComments.length - 2]}
      </p>
    </div>
  );
};
