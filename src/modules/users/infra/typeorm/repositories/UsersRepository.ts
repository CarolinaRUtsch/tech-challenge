import { getRepository, Repository, getManager, IsNull } from "typeorm";
import Users from "@modules/users/infra/typeorm/entities/users";
import ICreateUsersDTO from "@modules/users/dtos/ICreateUsersDTO";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<Users>;

  constructor() {
    this.ormRepository = getRepository(Users);
  }

  public async findById(id: string): Promise<Users | undefined> {
    const User = await this.ormRepository.findOne({
      where: {
        id: id,
      },
    });

    return User;
  }

  public async findByDocument(document: number): Promise<Users | undefined> {
    const User = await this.ormRepository.findOne({
      where: {
        document: document,
      },
    });

    return User;
  }

  public async create({
    status,
    name,
    document,
  }: ICreateUsersDTO): Promise<Users> {
    const user = this.ormRepository.create({
      status,
      name,
      document,
    });

    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: Users): Promise<Users> {
    await this.ormRepository.save(user);
    return user;
  }
}

export default UsersRepository;
