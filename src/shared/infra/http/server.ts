import "reflect-metadata";
import "dotenv/config";

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { errors } from "celebrate";
import "express-async-errors";
import AppError from "@shared/errors/AppError";
import routes from "./routes";

//import "./routines";
//import Runners from "../../routines";

import "@shared/infra/typeorm";
import "@shared/container";

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errors());

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error.",
    });
  }
);

app.listen(process.env.PORT, () => {
  console.log(`🙏 🙏  Server started on port ${process.env.PORT}`);
});
