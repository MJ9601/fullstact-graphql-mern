import {
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { createUser, deleteUser } from "../services/client.service";
import {
  createProduct,
  deleteProduct,
  findProductAndUpdate,
} from "../services/product.service";
import OwnerType from "./schemas/client.schema";
import ProductType from "./schemas/product.schema";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addClient: {
      type: OwnerType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return createUser({
          name: args.name,
          email: args.email,
        });
      },
    },
    deleteClient: {
      type: OwnerType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return deleteUser({ _id: String(args._id) });
      },
    },
    addProduct: {
      type: ProductType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLFloat) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProductStatus",
            values: {
              Published: { value: "published" },
              NotPublished: { value: "notPublished" },
            },
          }),
          defaultValue: "notPublished",
        },
        client: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return createProduct({
          title: args.title,
          price: args.price,
          description: args.description,
          image: args.image,
          status: args.status,
          client: args.client,
        });
      },
    },
    deleteProduct: {
      type: ProductType,
      args: {
        _id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return deleteProduct({ _id: String(args._id) });
      },
    },
    updateProduct: {
      type: ProductType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        image: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProductStatusUpdate",
            values: {
              Published: { value: "published" },
              NotPublished: { value: "notPublished" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return findProductAndUpdate(
          {
            _id: String(args._id),
          },
          {
            $set: {
              name: args.name,
              description: args.description,
              image: args.image,
              status: args.status,
              price: args.price,
            },
          },
          { new: true }
        );
      },
    },
  },
});

export default mutation;
