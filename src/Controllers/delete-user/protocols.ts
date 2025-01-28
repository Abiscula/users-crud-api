import { IUser } from "../../Models/users";
import { IHttpRequest, IHttpResponse } from "../protocols";

export interface IDeleteUserController {
  handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IUser>>;
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<IUser>;
}
