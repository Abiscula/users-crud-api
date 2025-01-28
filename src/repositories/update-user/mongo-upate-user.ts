import { ObjectId } from "mongodb";
import {
  IUpdateUserRepository,
  UpdateUserParams,
} from "../../Controllers/update-user/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser } from "../../Models/users";

export class MongoUpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, params: UpdateUserParams): Promise<IUser> {
    await MongoClient.db.collection("users").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const user = await MongoClient.db
      .collection<Omit<IUser, "id">>("users")
      .findOne({ _id: new ObjectId(id) });

    if (!user) {
      throw new Error("Usuário não atualizado");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
