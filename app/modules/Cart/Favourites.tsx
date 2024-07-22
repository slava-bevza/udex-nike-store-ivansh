import { FC } from "react";
import { ICollection } from "~/shared/interfaces";
import { CartCard } from "./CartCard";

interface Props {
  wishlist: ICollection[];
}

export const Favourites: FC<Props> = ({ wishlist }) => {
  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 ">
        <h4 className="font-medium text-xl">Favourites</h4>
        <p>There are no items saved to your favourites.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 max-w-[1200px] w-full py-4 px-8 xl:px-32 mx-auto">
      <h3 className="font-medium text-lg">Favourites</h3>
      <div className="grid grid-cols-2">
        {wishlist.map((favourite) => (
          <CartCard
            key={favourite.product.id}
            product={favourite.product}
            size={favourite.size}
            recordId={favourite.id}
            isWishItem
          />
        ))}
      </div>
    </div>
  );
};
