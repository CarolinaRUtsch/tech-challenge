import { Request, Response } from "express";
import listMoviesService from "@modules/movies/services/ListMoviesService";
import ListFavoritesService from "@modules/movies/services/ListFavoritesService";
import RemoveFavoriteService from "@modules/movies/services/RemoveFavoriteService";

import { container } from "tsyringe";

class MoviesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { movie, favorite, user_id } = request.body;
    const createAccountService = container.resolve(listMoviesService);

    const movies = await createAccountService.execute({
      movie,
      favorite,
      user_id,
    });
    return response.json(movies);
  }
  public async show(request: Request, response: Response): Promise<Response> {
    const { document } = request.params;
    const listFavoritesService = container.resolve(ListFavoritesService);

    const movies = await listFavoritesService.execute({
      document,
    });
    return response.json(movies);
  }
  public async showremove(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { imdbID, document } = request.body;
    const removeFavoriteService = container.resolve(RemoveFavoriteService);

    const movies = await removeFavoriteService.execute({
      imdbID,
      document,
    });
    return response.json(movies);
  }
}

export default new MoviesController();
