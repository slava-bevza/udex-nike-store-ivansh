import React from "react";
import { IProduct } from "~/shared/interfaces/product";
import { Carousel } from "../Global";
import { CarouselItem } from "~/shared/ui";

interface Props {
  product: IProduct;
}

export const ProductCarousel: React.FC<Props> = ({ product }) => {
  return (
    <Carousel>
      {product.images.map((image) => (
        <CarouselItem className="basis-[100%]" key={product.id}>
          <img
            src={`http://ivs-nikestore-pb.apps.aiweb.cloud/api/files/${product.collectionId}/${product.id}/${image}`}
            className="w-full"
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};
