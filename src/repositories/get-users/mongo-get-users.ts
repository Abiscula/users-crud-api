import { IGetUsersRepository } from "../../Controllers/get-users/protocols";
import { User } from "../../Models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Victor",
        lastName: "Abiscula",
        email: "victor@email.com",
        password: "123",
      },
    ];
  }
}
