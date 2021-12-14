import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HASURA_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_KEY || "",
  },
});

export default client;