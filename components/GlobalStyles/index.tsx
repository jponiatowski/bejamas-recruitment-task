import { createGlobalStyle } from "styled-components";
import { theme } from "theme/index";

export const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Archivo', sans-serif;
}

body {
  padding: 40px 91px 61px 67px;

  @media (max-width: ${(p) => p.theme.breakpoints.mobile}) {
    padding: 40px 18px;
  }
}
`;
