import { IUser } from "../../Models/users";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { badRequest, ok, serverError } from "../../utils/requestHelper";
import { IUpdateUserRepository, IUpdateUserParams } from "./protocols";

export class UpdateUserController implements IController {
  constructor(private readonly updateUserRepository: IUpdateUserRepository) {}

  async handle(
    httpRequest: IHttpRequest<IUpdateUserParams>
  ): Promise<IHttpResponse<IUser>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Body ausente");
      }

      if (!id) {
        return badRequest("Id do usuário não encontrado");
      }

      const allowedFieldsToUpdate: (keyof IUpdateUserParams)[] = [
        "firstName",
        "lastName",
        "password",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof IUpdateUserParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Algum dos campos recebidos não pode ser atualizado");
      }

      const user = await this.updateUserRepository.updateUser(id, body);

      return ok(user);
    } catch (error) {
      return serverError();
    }
  }
}
