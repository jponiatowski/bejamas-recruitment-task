import { RootState } from "store";

export const getIsCartOpen = (state: RootState) => state.cart.isCartOpen;
