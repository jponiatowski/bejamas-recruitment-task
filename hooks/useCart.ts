import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  clearCart,
  openCart,
  closeCart,
  toggleCart,
} from "~/store/slices/cart-slice";
import { getIsCartOpen } from "~/store/selectors/getIsCartOpen";

interface UseCart {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  handleClear: () => void;
  handleToggleCart: () => void;
}

export const useCart = (): UseCart => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(getIsCartOpen);

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const handleOpenCart = () => {
    dispatch(openCart());
  };

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  const handleClear = () => {
    dispatch(clearCart());
    dispatch(closeCart());
  };

  return {
    handleOpenCart,
    handleCloseCart,
    handleClear,
    handleToggleCart,
  };
};
