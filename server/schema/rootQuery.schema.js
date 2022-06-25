import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
} from "graphql";
import OwnerType from "./client.schema";
import { owners, products } from "../data";
import ProductType from "./product.schema";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    owner: {
      type: OwnerType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return owners.find((owner) => owner.id == args.id);
      },
    },
    owners: {
      type: new GraphQLList(OwnerType),
      resolve(parent, args) {
        return owners;
      },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        return products;
      },
    },
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return products.find((product) => product.id == args.id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
