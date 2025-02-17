import { IUser } from "../../Models/users";

export interface IUpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: IUpdateUserParams): Promise<IUser>;
}
