import React from "react";
import { IProduct } from "~/shared/interfaces/product";
import { Dialog } from "~/shared/ui/";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui/dialog";
import { ProductBenefitsList } from ".";

interface Props {
  product: IProduct;
}

export const ProductDetailsDialog: React.FC<Props> = ({ product }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <p className="font-medium underline underline-offset-8">
          View product details
        </p>
      </DialogTrigger>
      <DialogContent className="max-w-[960px] overlow-y-scroll">
        <DialogHeader>
          <div className="flex items-center gap-4 ">
            <img
              src={`http://ivs-nikestore-pb.apps.aiweb.cloud/api/files/${product.collectionId}/${product.id}/${product.thumbnail}`}
              alt={`${product.title}`}
              className="w-20 h-20 object-cover"
            />
            <div className="flex flex-col gap-2">
              <DialogTitle className="font-medium">{product.title}</DialogTitle>
              <DialogDescription>${product.price}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-8 px-2">
          <p>{product.description}</p>
          <ProductBenefitsList title="Benefits" details={product.benefits} />
          <ProductBenefitsList
            title="Product Details"
            details={product.productDetails}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
