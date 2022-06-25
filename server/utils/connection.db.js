import mongoose from "mongoose";
import logger from "./logger";

const uri =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/graphQl_basic_server";

const dbConnect = async () => {
  try {
    await mongoose.connect(uri);
    logger.info(`Connect to db ...`);
  } catch (err) {
    logger.error(`Couldn't connect to db`);
    process.exit(1);
  }
};

export default dbConnect;
