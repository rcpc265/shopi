import { create } from "zustand";

interface CartProduct {
  id: number;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
}

interface CartActions {
  products: CartProduct[];
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  getCartCount: () => number;
  checkIsInCart: (productId: number) => boolean;
  toggleInCart: (productId: number, quantity?: number) => void;
}

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>((set, get) => ({
  products: [],
  addToCart: (productId, quantity) =>
    set((state) => ({
      ...state,
      products: [...state.products, { id: productId, quantity }],
    })),
  removeFromCart: (id: number) =>
    set((state) => ({
      ...state,
      products: state.products.filter((product) => product.id !== id),
    })),
  checkIsInCart: (productId) =>
    get().products.some((product) => product.id === productId),
  toggleInCart: (productId, quantity = 1) => {
    get().checkIsInCart(productId)
      ? get().removeFromCart(productId)
      : get().addToCart(productId, quantity);
  },
  getCartCount: () =>
    get().products.reduce((count, product) => count + product.quantity, 0),
}));
