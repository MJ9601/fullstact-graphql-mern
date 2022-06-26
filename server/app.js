import express from "express";
import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/root.schema";
import logger from "./utils/logger";
import dbConnect from "./utils/connection.db";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, async () => {
  logger.info(`Server is running on PORT ${port}`);
  await dbConnect();
});

