import { IUser } from "../../Models/users";

export interface IGetUsersRepository {
  getUsers(): Promise<IUser[]>;
}
