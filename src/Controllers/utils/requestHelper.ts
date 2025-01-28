import { HttpStatusCode } from "../protocols";

export const ok = (body: any) => ({ statusCode: HttpStatusCode.OK, body });

export const created = (body: any) => ({
  statusCode: HttpStatusCode.CREATED,
  body,
});

export const badRequest = (message: string) => ({
  statusCode: HttpStatusCode.BAD_REQUEST,
  body: message,
});

export const serverError = () => ({
  statusCode: HttpStatusCode.SERVER_ERROR,
  body: "Algo deu errado",
});
