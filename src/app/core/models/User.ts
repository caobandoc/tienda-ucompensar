export interface User{
  id: number;
  name: string;
  lastname: string;
  username: string;
  password: string;
}

export interface LoginUser{
  username: string;
  password: string;
}

export interface Token{
  token: string;
}
