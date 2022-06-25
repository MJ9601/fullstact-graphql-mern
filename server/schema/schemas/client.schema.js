import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { owners } from "../../data";

const OwnerType = new GraphQLObjectType({
  name: "Owner",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

export default OwnerType;
