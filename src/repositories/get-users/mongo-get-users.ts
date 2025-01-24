import { IGetUsersRepository } from "../../Controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser } from "../../Models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<IUser[]> {
    const users = await MongoClient.db
      .collection<Omit<IUser, "id">>("users")
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
