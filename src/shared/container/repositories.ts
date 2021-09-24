import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

import IMovieRepository from "@modules/movies/repositories/IMovieRepository";
import MovieRepository from "@modules/movies/infra/typeorm/repositories/MovieRepository";

import { container } from "tsyringe";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IMovieRepository>(
  "MovieRepository",
  MovieRepository
);
