import { IUser } from "../../Models/users";

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  passwordd: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<IUser>;
}
