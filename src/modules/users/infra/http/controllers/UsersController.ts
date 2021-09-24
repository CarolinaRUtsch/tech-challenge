import { Request, Response } from "express";
import CreateUserService from "@modules/users/services/CreateUserService";
import { container } from "tsyringe";

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, document } = request.body;
    const createUserService = container.resolve(CreateUserService);

    const users = await createUserService.execute({
      name,
      document,
    });
    return response.json(users);
  }
}

export default new UsersController();
