import { RootState } from "store";

export const getCartProducts = (state: RootState) => state.cart.products;
