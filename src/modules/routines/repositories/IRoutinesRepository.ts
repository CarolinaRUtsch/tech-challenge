import Routine from "../infra/typeorm/entities/Routine";

export default interface IRoutinesRepository {
  findAll(): Promise<Array<Routine>>;
}
