import { getRepository, Repository, getManager, IsNull } from "typeorm";
import Movies from "@modules/movies/infra/typeorm/entities/movies";
import IFavoriteMoviesDTO from "@modules/movies/dtos/IFavoriteMoviesDTO";
import IMovieRepository from "@modules/movies/repositories/IMovieRepository";

class MoviesRepository implements IMovieRepository {
  private ormRepository: Repository<Movies>;

  constructor() {
    this.ormRepository = getRepository(Movies);
  }

  public async findById(id: string): Promise<Movies | undefined> {
    const movie = await this.ormRepository.findOne({
      where: {
        id: id,
      },
    });

    return movie;
  }

  public async findByMovies(
    imdbID: string,
    user_id: string
  ): Promise<Movies | undefined> {
    const favorites = await this.ormRepository.findOne({
      where: {
        imdbID: imdbID,
        user_id: user_id,
      },
    });

    return favorites;
  }

  public async findByFavorite(
    favorite: boolean,
    user_id: string
  ): Promise<Movies | undefined> {
    const favorites = await this.ormRepository.findOne({
      where: {
        favorite: favorite,
        user_id: user_id,
      },
    });

    return favorites;
  }
  public async findByFavoriteMovies(user_id: string): Promise<Array<Movies>> {
    return this.ormRepository.find({
      where: {
        favourite: true,
        user_id: user_id,
      },
    });
  }

  public async findByUser(user_id: string): Promise<Movies | undefined> {
    const favorites = await this.ormRepository.findOne({
      where: {
        user_id: user_id,
      },
    });

    return favorites;
  }

  public async create({
    user_id,
    title,
    imdbID,
    favourite,
  }: IFavoriteMoviesDTO): Promise<Movies> {
    const movie = this.ormRepository.create({
      user_id,
      title,
      imdbID,
      favourite,
    });

    await this.ormRepository.save(movie);
    return movie;
  }

  public async save(movie: Movies): Promise<Movies> {
    await this.ormRepository.save(movie);
    return movie;
  }
}

export default MoviesRepository;
