import Client from "./components/Clients.page";
import Header from "./components/Header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Products from "./components/Products.page";
import CreateUser from "./components/CreateUser.model";
import CreateProject from "./components/CreateProject.model";
import UpdateProduct from "./components/UpdateProject.model";
import UserPage from "./components/User.page";
import { useAppState } from "./context/StateProvider";

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
  const [
    { createProduct, currentProduct, createUser, currentUser, displayUsers },
  ] = useAppState();
  return (
    <div className="relative">
      <ApolloProvider client={client}>
        <Header />
        {createUser && <CreateUser />}
        {createProduct && <CreateProject />}
        {currentProduct && <UpdateProduct />}
        <>
          {currentUser ? (
            <UserPage />
          ) : (
            <>{displayUsers ? <Client /> : <Products />}</>
          )}
        </>
      </ApolloProvider>
    </div>
  );
}

export default App;
