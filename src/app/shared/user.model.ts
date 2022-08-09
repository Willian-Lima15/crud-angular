import { UsersModel } from "./users.model";

export interface ResponseUser {
     data: UsersModel
}

//modelos para o update

export class RequestUpdate {
  public name!: string;
  public job!: string;
}

export class ResponseUpdate {
  public  name!: string;
  public  job!: string;
  public  updateAt!: Date;
}
