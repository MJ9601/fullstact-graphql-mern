import Client from "./components/Client";
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.APOLLO_URI || "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});
function App() {
  return (
    <div className="">
      <ApolloProvider client={client}>
        <Header />
        <Client />
      </ApolloProvider>
    </div>
  );
}

export default App;
