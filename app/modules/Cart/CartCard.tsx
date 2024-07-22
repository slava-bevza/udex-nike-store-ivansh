import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import React from "react";
import { IProduct } from "~/shared/interfaces";

interface Props {
  product: IProduct;
  size: number;
  isWishItem?: boolean;
  recordId: string;
}

export const CartCard: React.FC<Props> = ({
  product,
  size,
  isWishItem = false,
  recordId,
}) => {
  const deleteActionType = `deleteFrom${isWishItem ? "Wish" : "Cart"}`;

  return (
    <div className="flex lg:w-[540px] gap-4">
      <img
        src={`http://ivs-nikestore-pb.apps.aiweb.cloud/api/files/${product.collectionId}/${product.id}/${product.thumbnail}`}
        className="h-36 w-36"
      />
      <div className="flex flex-col max-w-64 gap-1">
        <h5 className="font-medium text-xs xs:text-base">{product.title}</h5>
        <p className="text-[#757575] font-light">{product.category}</p>
        {/* <p className="text-[#757575]">{0}</p> */}
        <div className="flex justify-between gap-4 text-sm text-nowrap text-[#757575] font-light">
          <p>Size {size}</p>
          <p>Quantity 1</p>
        </div>
        <div className="font-medium xs:hidden text-sm sm:text-base">
          $ {product.price.toLocaleString()}
        </div>
        <Form method="post" className="flex gap-4 mt-auto py-2">
          <input name="recordId" value={recordId} type="hidden" />
          <input name="productId" value={product.id} type="hidden" />
          <input name="size" value={size} type="hidden" />
          {isWishItem ? (
            <button name="_action" value="addToCart">
              <ShoppingBag />
            </button>
          ) : (
            <button name="_action" value="addToWish">
              <Heart />
            </button>
          )}
          <button name="_action" value={deleteActionType}>
            <Trash2 />
          </button>
        </Form>
      </div>
      <div className="ml-auto hidden xs:block font-medium text-sm sm:text-base">
        $ {product.price.toLocaleString()}
      </div>
    </div>
  );
};
