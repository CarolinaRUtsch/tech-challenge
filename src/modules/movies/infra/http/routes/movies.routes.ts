import { Router } from "express";
import { celebrate, Segments, Joi } from "celebrate";

import MoviesController from "../controllers/MoviesController";

const moviesRouter = Router();

moviesRouter.get(
  "/list",
  celebrate({
    [Segments.BODY]: {
      movie: Joi.string().required(),
      favorite: Joi.boolean(),
      user_id: Joi.string(),
    },
  }),
  MoviesController.create
);

moviesRouter.get("/favorite/:document", MoviesController.show);
moviesRouter.post(
  "/remove-favorite",
  celebrate({
    [Segments.BODY]: {
      imdbID: Joi.string().required(),
      document: Joi.string().required(),
    },
  }),
  MoviesController.showremove
);

export default moviesRouter;
