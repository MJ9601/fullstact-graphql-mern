import { GraphQLSchema } from "graphql";
import RootQuery from "./query.schema";
import mutation from "./mutation.schema";

export default new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
