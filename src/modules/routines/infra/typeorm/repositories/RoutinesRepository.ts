import { getRepository, Repository } from "typeorm";
import IRoutinesRepository from "../../../repositories/IRoutinesRepository";
import Routine from "../entities/Routine";

class RoutinesRepository implements IRoutinesRepository {
  private ormRepository: Repository<Routine>;

  constructor() {
    this.ormRepository = getRepository(Routine);
  }

  public async findAll(): Promise<Array<Routine>> {
    return this.ormRepository.find();
  }
}

export default RoutinesRepository;
