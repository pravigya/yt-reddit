import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: " https://oros.stepzen.net/api/busted-pronghorn/__graphql",
  headers:{
    Authorization:`Apikey ${process.env.STEPZEN_APIKEY}`
  }
  cache: new InMemoryCache(),
});

export default client;
