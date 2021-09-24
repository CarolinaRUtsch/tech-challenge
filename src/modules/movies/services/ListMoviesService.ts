import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import axios from "axios";
import IMovieRepository from "@modules/movies/repositories/IMovieRepository";
import statusCode from "@config/statusCode";

interface IRequest {
  movie: string;
  favorite: boolean;
  user_id: string;
}
@injectable()
class listMoviesService {
  constructor(
    @inject("MovieRepository")
    private movieRepository: IMovieRepository
  ) {}

  public async execute({ movie, favorite, user_id }: IRequest): Promise<any> {
    try {
      const { data: response } = await axios.get(
        `http://www.omdbapi.com/?apikey=925eba28&s=${movie}/`,
        {}
      );

      if (favorite === true && user_id == null) {
        throw new AppError(
          "Para favoritar um filme porfavor insera o user_id",
          statusCode.BAD_REQUEST
        );
      } else if (favorite === true && user_id != null) {
        await this.movieRepository.create({
          user_id: user_id,
          title: response.Search[0].Title,
          imdbID: response.Search[0].imdbID,
          favourite: favorite,
        });
      }

      return response;
    } catch (err) {
      console.log(err.response);
      const error =
        err.message || "Não foi possível carrregar os dados. Tente novamente.";

      throw new AppError(error);
    }
  }
}

export default listMoviesService;
