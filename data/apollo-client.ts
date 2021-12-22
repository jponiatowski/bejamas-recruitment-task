import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined",
  cache: new InMemoryCache(),
  uri: process.env.HASURA_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_KEY || "",
  },
});

export default client;
