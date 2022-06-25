import express from "express";
import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/rootQuery.schema";

const app = express();

const port = process.env.PORT || 8080;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
