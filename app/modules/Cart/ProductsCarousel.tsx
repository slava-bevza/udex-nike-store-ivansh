import React from "react";
import { Carousel } from "../Global";
import { IProduct } from "~/shared/interfaces";
import { CarouselItem } from "~/shared/ui";
import { ProductCard } from "../Product";

interface Props {
  products: IProduct[];
}

export const ProductsCarousel: React.FC<Props> = ({ products }) => {
  return (
    <Carousel>
      {products.map((product) => (
        <CarouselItem key={product.id}>
          <ProductCard isSmall={true} product={product} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};
