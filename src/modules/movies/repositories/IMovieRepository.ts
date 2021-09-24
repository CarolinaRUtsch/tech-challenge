import Movies from "@modules/movies/infra/typeorm/entities/movies";
import IFavoriteMoviesDTO from "../dtos/IFavoriteMoviesDTO";

export default interface IUsersRepository {
  findById(id: string | undefined): Promise<Movies | undefined>;
  findByFavorite(
    favorite: boolean,
    user_id: string
  ): Promise<Movies | undefined>;
  findByUser(user_id: string): Promise<Movies | undefined>;
  findByFavoriteMovies(user_id: string): Promise<Array<Movies>>;
  findByMovies(user_id: string, imdbID: string): Promise<Movies | undefined>;

  save(movie: Movies): Promise<Movies>;
  create(data: IFavoriteMoviesDTO): Promise<Movies>;
}
