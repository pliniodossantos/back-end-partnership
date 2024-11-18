import { Customer } from "../infra/database/entities/Customer";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";


export default class ListCostumerService {
    async execute(): Promise<Customer[]> {
        const customers =  await customerRepositories.find();
        return customers;
}
}