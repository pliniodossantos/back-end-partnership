export interface IStore{
    id: number;
    name: string;
    email: string;
    cnpj: string;
    password: string;
    active: boolean;
    birthday: Date;
    created_at: Date;
    updated_at: Date;
}