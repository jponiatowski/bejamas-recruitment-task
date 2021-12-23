import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { theme } from "~/theme";
import { store } from "~/store/store";
import Header from "components/Header";
import { GlobalStyles } from "components/GlobalStyles";
import client from "data/apollo-client";

import { useApollo } from "~/data/apollo-client";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <GlobalStyles theme={theme} />
              <Header />
              <Component {...pageProps} />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
