import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../Controllers/create-user/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser } from "../../Models/users";
import { MongoUser } from "../mongo-protocols";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<IUser> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params);

    const user = await MongoClient.db
      .collection<MongoUser>("users")
      .findOne({ _id: insertedId });

    if (!user) {
      throw new Error("Usuario não criado");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
