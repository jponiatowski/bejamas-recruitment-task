import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "theme/index";
import Header from "components/Header";
import { GlobalStyles } from "components/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
