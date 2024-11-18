export interface ICreateCustomer {
    name: string;
    email: string;
    cpfOrCnpj: string;
    password:string;
    active: boolean;
    birthday: Date;
    complement: string;
  }