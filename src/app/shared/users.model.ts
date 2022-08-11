export interface UsersModel {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UsersModel[];
}
//modelo para criar user
export interface RequestCreate {
    name: string;
    job: string;
}

export interface ResponseCreate {
    name: string;
    job: string;
    id: string;
    createdAt: Date;
}

//modelo para update user

export interface ResponseUser {
    data: UsersModel;
}

//modelos para o update

export interface RequestUpdate {
    name: string;
    job: string;
}

export interface ResponseUpdate {
    name: string;
    job: string;
    updateAt: Date;
}
