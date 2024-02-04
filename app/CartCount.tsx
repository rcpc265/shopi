"use client";
import { useCartStore } from "@/store/cartStore";

const CartCount = () => {
  const { getCartCount } = useCartStore();
  return <span>🛒 {getCartCount()}</span>;
};

export default CartCount;
