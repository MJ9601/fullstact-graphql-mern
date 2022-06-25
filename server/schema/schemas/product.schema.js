import { owners, products } from "../../data";
import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import OwnerType from "./client.schema";
import { findUser } from "../../services/client.service";

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    image: { type: GraphQLString },
    client: {
      type: OwnerType,
      resolve(parent, arge) {
        return findUser({ _id: String(parent.owner) });
      },
    },
  }),
});


export default ProductType;
