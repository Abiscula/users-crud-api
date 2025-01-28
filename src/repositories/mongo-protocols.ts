import { IUser } from "../Models/users";

export type MongoUser = Omit<IUser, "id">;
