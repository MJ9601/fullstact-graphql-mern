import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import OwnerType from "./schemas/client.schema";
import ProductType from "./schemas/product.schema";
import { findAllUser, findUser } from "../services/client.service";
import { findAllProducts, findProduct } from "../services/product.service";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return findUser({ _id: String(args.id) });
      },
    },
    owners: {
      type: new GraphQLList(OwnerType),
      resolve(parent, args) {
        return findAllUser();
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return findAllProducts();
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return findProduct({ _id: String(args.id) });
      },
    },
  },
});

export default RootQuery;
