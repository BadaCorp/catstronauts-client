import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import GlobalStyles from "./styles";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  // uri: "https://badacorp-catstronauts-server.herokuapp.com/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
