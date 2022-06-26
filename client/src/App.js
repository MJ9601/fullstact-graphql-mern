import Client from "./components/Clients.page";
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Products from "./components/Products.page";
import CreateUser from "./components/CreateUser.model";
import CreateProject from "./components/CreateProject.model";
import UpdateProduct from "./components/UpdateProject.model";
import UserPage from "./components/User.page";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        products: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.APOLLO_URI || "http://localhost:8080/graphql",
  cache,
});
function App() {
  return (
    <div className="relative">
      <ApolloProvider client={client}>
        <Header />
        {/* <Client /> */}
        {/* <Products /> */}
        {/* <CreateUser /> */}
        {/* <CreateProject /> */}
        {/* <UpdateProduct /> */}
        <UserPage />
      </ApolloProvider>
    </div>
  );
}

export default App;
