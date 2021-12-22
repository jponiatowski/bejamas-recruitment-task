import { useState, useEffect } from "react";
import { breakpoints } from "~/theme/breakpoints";

export const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= Number(breakpoints.mobile.slice(0, -2));
};
