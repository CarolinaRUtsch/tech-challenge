import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import IMovieRepository from "@modules/movies/repositories/IMovieRepository";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";

import statusCode from "@config/statusCode";

interface IRequest {
  imdbID: string;
  document: number;
}
@injectable()
class listMoviesService {
  constructor(
    @inject("MovieRepository")
    private movieRepository: IMovieRepository,

    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ imdbID, document }: IRequest): Promise<any> {
    try {
      const users = await this.usersRepository.findByDocument(document);

      if (!users) {
        throw new AppError("usuario nao encontrado", statusCode.BAD_REQUEST);
      }
      const favorites = await this.movieRepository.findByMovies(
        imdbID,
        users.id
      );

      if (!favorites) {
        throw new AppError(
          "Não foi encontrado este filme na lista do usuario",
          statusCode.BAD_REQUEST
        );
      }

      await this.movieRepository.save({
        ...favorites,
        favourite: false,
      });
    } catch (err) {
      console.log(err.response);
      const error =
        err.message || "Não foi possível carrregar os dados. Tente novamente.";

      throw new AppError(error);
    }
  }
}

export default listMoviesService;
