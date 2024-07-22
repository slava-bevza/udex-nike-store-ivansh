import React from "react";
import {
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  Carousel as CarouselWrapper,
} from "~/shared/ui";

interface Props {
  children: React.ReactNode;
}

export const Carousel: React.FC<Props> = ({ children }) => {
  return (
    <CarouselWrapper>
      <CarouselContent className="w-full h-full">{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselWrapper>
  );
};
