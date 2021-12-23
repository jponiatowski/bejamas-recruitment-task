import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { getIsCartOpen } from "~/store/selectors/getIsCartOpen";
import {
  clearCart,
  openCart,
  closeCart,
  toggleCart,
} from "~/store/slices/cart-slice";
import { lockPageScroll } from "~/utils/lockPageScroll";
import { unlockPageScroll } from "~/utils/unlockPageScroll";
import { useIsMobile } from "~/hooks/useIsMobile";

interface IUseCart {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  handleClear: () => void;
  handleToggleCart: () => void;
}

export const useCart = (): IUseCart => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(getIsCartOpen);
  const isMobile = useIsMobile();

  const handleToggleCart = () => {
    if (isMobile) {
      isCartOpen ? unlockPageScroll() : lockPageScroll();
    }

    dispatch(toggleCart());
  };

  const handleOpenCart = () => {
    dispatch(openCart());
    isMobile && lockPageScroll();
  };

  const handleCloseCart = () => {
    dispatch(closeCart());
    isMobile && unlockPageScroll();
  };

  const handleClear = () => {
    dispatch(clearCart());
    dispatch(closeCart());
    isMobile && unlockPageScroll();
  };

  return {
    handleOpenCart,
    handleCloseCart,
    handleClear,
    handleToggleCart,
  };
};
