import { Customer } from "../infra/database/entities/Customer";

export interface ISessionCustomerResponse{
    customer: Customer;
    token: string;
}