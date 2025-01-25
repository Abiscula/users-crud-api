import {
  CreateUserParams,
  ICreateUserRepository,
} from "../../Controllers/create-user/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser } from "../../Models/users";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<IUser> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<Omit<IUser, "id">>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("Usuario não criado");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
