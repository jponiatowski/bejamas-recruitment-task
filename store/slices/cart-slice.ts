import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "types/api";
import { lockPageScroll } from "~/utils/lockPageScroll";
import { unlockPageScroll } from "~/utils/unlockPageScroll";

interface CartState {
  products: Product[];
  isCartOpen: boolean;
}

const initialState: CartState = {
  products: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart: (state) => {
      lockPageScroll();
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      unlockPageScroll();
      state.isCartOpen = false;
    },
    toggleCart: (state) => {
      state.isCartOpen ? unlockPageScroll() : lockPageScroll();
      state.isCartOpen = !state.isCartOpen;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      lockPageScroll();
      state.products.push(action.payload);
      state.isCartOpen = true;
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, clearCart, openCart, closeCart, toggleCart } =
  cartSlice.actions;

export default cartSlice.reducer;
