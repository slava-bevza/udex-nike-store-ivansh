import cart from "~/routes/cart";
import { Button } from "~/shared/ui";
import { CartCard } from "./CartCard";
import { ICollection } from "~/shared/interfaces";
import { FC } from "react";
import { CartSummary } from "./CartSummary";

interface Props {
  cart: ICollection[];
}

export const Bag: FC<Props> = ({ cart }) => {
  const totalPrice = cart.reduce((acc, cur) => acc + cur.product.price, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 ">
        <h4 className="font-medium text-xl">Bag</h4>
        <p>There are no items saved to your bag.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto gap-16 items-center px-4 border">
      {/* Cart items */}
      <div className="space-y-4">
        <h3 className="font-medium text-lg">Bag</h3>
        <div className="space-y-4">
          {cart.map((record) => (
            <CartCard
              key={record.product.id}
              product={record.product}
              size={record.size}
              recordId={record.id}
            />
          ))}
        </div>
      </div>

      {/* Summary */}
      <CartSummary totalPrice={totalPrice} />
    </div>
  );
};
