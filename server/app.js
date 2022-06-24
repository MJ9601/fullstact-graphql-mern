import express from "express";
import "dotenv/config";

const app = express();

const port = env.process.PORT || 8080;

app.listen(port, () => console.log(`Server is running on PORT ${port}`));
