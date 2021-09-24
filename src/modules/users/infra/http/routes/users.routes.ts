import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import UsersController from "../controllers/UsersController";

const usersRouter = Router();

usersRouter.post(
  "/create",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      document: Joi.number().required(),
    },
  }),
  UsersController.create
);

export default usersRouter;
