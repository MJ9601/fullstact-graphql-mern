import { owners, products } from "../data";
import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import OwnerType from "./client.schema";

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
    image: { type: GraphQLString },
    owner: {
      type: OwnerType,
      resolve(parent, arge) {
        return owners.find((owner) => owner.id === parent.owner);
      },
    },
  }),
});

export default ProductType;
