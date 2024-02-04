"use client";

import { useCartStore } from "@/store/cartStore";

interface Props {
  productId: number;
}

const CartToggleBtn = ({ productId }: Props) => {
  const { toggleInCart, checkIsInCart } = useCartStore();
  return (
    <button
      onClick={() => toggleInCart(productId)}
      className="absolute right-3 top-3 z-10 flex size-6 items-center justify-center rounded-full bg-black/80 pb-0.5 text-xl text-white transition-transform hover:scale-110 hover:bg-black"
    >
      {checkIsInCart(productId) ? "-" : "+"}
    </button>
  );
};

export default CartToggleBtn;
