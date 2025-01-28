import validator from "validator";
import { IUser } from "../../Models/users";
import { IController, IHttpRequest, IHttpResponse } from "../protocols";
import { ICreateUserParams, ICreateUserRepository } from "./protocols";
import { badRequest, created, serverError } from "../utils/requestHelper";

export class CreateUserController implements IController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: IHttpRequest<ICreateUserParams>
  ): Promise<IHttpResponse<IUser>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];
      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof ICreateUserParams]?.length) {
          return badRequest(`Campo ${field} é obrigatório`);
        }
      }

      const emailIsValid = validator.isEmail(httpRequest.body!.email);

      if (!emailIsValid) {
        return badRequest("Email inválido");
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );
      return created(user);
    } catch (error) {
      return serverError();
    }
  }
}
