import { IUser } from "../../Models/users";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface UpdateUserParams {
  firstName?: string;
  lastName?: string;
  password?: string;
}

export interface IUpdateUserController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IUser>>;
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<IUser>;
}
