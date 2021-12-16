import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { theme } from "theme";
import { store } from "store";
import Header from "components/Header";
import { GlobalStyles } from "components/GlobalStyles";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles theme={theme} />
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
