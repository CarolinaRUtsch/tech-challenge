import moviesRouter from "@modules/movies/infra/http/routes/movies.routes";
import usersRouter from "@modules/users/infra/http/routes/users.routes";

import { Router } from "express";

const routes = Router();

routes.use("/v1/movies", moviesRouter);
routes.use("/v1/user", usersRouter);

export default routes;
