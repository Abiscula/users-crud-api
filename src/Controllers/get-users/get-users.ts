import { IController } from "../protocols";
import { ok, serverError } from "../../utils/requestHelper";
import { IGetUsersRepository } from "./protocols";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle() {
    try {
      const users = await this.getUsersRepository.getUsers();
      return ok(users);
    } catch (error) {
      return serverError();
    }
  }
}
