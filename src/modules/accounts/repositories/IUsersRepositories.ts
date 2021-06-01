import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
