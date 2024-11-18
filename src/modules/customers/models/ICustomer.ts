export interface ICustomer {
    id: number;
    name: string;
    email: string;
    cpfOrCnpj: string;
    password: string;
    active: boolean;
    birthday: Date;
    complement: string;
    created_at: Date;
    updated_at: Date;
  }