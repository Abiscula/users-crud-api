import { IUser } from "../../Models/users";

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<IUser>;
}
