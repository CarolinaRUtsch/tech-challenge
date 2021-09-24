import Users from "@modules/users/infra/typeorm/entities/users";
import ICreateUsersDTO from "../dtos/ICreateUsersDTO";

export default interface IUsersRepository {
  findById(id: string | undefined): Promise<Users | undefined>;
  findByDocument(document: number | undefined): Promise<Users | undefined>;

  save(user: Users): Promise<Users>;
  create(data: ICreateUsersDTO): Promise<Users>;
}
