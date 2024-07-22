import React from "react";
import { Button } from "~/shared/ui";

interface Props {
  totalPrice: number;
}

export const CartSummary: React.FC<Props> = ({ totalPrice }) => {
  return (
    <div className="w-64 xs:w-[350px] space-y-4 p-4 text-sm">
      <h4 className="font-medium text-xl">Summary</h4>
      <div className="flex justify-between w-full">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>
      <div className="flex justify-between w-full">
        <p>Estimated delivery & Handling</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between w-full border-t border-b py-4 px-2">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>
      <Button className="w-full rounded-full py-6">Checkout</Button>
    </div>
  );
};
