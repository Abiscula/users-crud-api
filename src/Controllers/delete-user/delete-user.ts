import { IUser } from "../../Models/users";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { badRequest, ok, serverError } from "../utils/requestHelper";
import { IDeleteUserRepository } from "./protocols";

export class DeleteUserController implements IController {
  constructor(private readonly deleteUserRepository: IDeleteUserRepository) {}
  async handle(httpRequest: IHttpRequest<any>): Promise<IHttpResponse<IUser>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Id não encontrado");
      }

      const user = await this.deleteUserRepository.deleteUser(id);

      return ok(user);
    } catch (error) {
      return serverError();
    }
  }
}
