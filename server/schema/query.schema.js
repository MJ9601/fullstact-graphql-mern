import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import OwnerType from "./schemas/client.schema";
import ProductType from "./schemas/product.schema";
import { findAllUser, findUser } from "../services/client.service";
import { findProduct, findProducts } from "../services/product.service";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    client: {
      type: OwnerType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return findUser({ _id: String(args._id) });
      },
    },
    clients: {
      type: new GraphQLList(OwnerType),
      resolve(parent, args) {
        return findAllUser();
      },
    },
    filterProducts: {
      type: new GraphQLList(ProductType),
      args: { client: { type: GraphQLID } },
      resolve(parent, args) {
        return findProducts({ client: args.client });
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return findProducts();
      },
    },
    product: {
      type: ProductType,
      args: { _id: { type: GraphQLID } },
      resolve(parent, args) {
        return findProduct({ _id: String(args._id) });
      },
    },
  },
});

export default RootQuery;
