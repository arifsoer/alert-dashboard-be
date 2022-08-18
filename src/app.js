import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {
  errorHandler,
  errorLog,
  failSafeHandler,
} from "./middlewares/error.middleware.js";
import { ForbiddenError } from "./utils/error.js";
import { port } from "./utils/envConfig.js";

import globalRouter from "./router.js";

const app = express();
const portExp = port || 3000;

app.use(json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", globalRouter);

app.use("/be-static", express.static("public/audios"));

app.use("*", (_, _1) => {
  throw new ForbiddenError();
});

app.use(errorLog);
app.use(errorHandler);
app.use(failSafeHandler);

app.listen(portExp, () => {
  console.log("server ready get request");
});
