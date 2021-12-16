import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "types/api";

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
    openCart(state) {
      state.isCartOpen = true;
    },
    closeCart(state) {
      state.isCartOpen = false;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
      state.isCartOpen = true;
    },
    clearCart(state) {
      state.products = [];
    },
  },
});

export const { addProduct, clearCart, openCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
