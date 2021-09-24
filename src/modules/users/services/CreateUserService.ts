import { inject, injectable } from "tsyringe";
import AppError from "@shared/errors/AppError";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import statusCode from "@config/statusCode";

interface IRequest {
  name: string;
  document: number;
}
@injectable()
class CreateUserService {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, document }: IRequest): Promise<any> {
    const documents = await this.usersRepository.findByDocument(document);

    if (documents) {
      throw new AppError("documento ja cadastrado", statusCode.BAD_REQUEST);
    }
    try {
      await this.usersRepository.create({
        name: name,
        document: document,
        status: "Create",
      });
    } catch (err) {
      console.log(err.response);
      const error =
        err.message || "Não foi possível carrregar os dados. Tente novamente.";

      throw new AppError(error);
    }
  }
}

export default CreateUserService;
