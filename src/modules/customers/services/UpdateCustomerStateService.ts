
import AppError from "../../../shared/errors/AppError";
import { Customer } from "../infra/database/entities/Customer";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { IUpdateCustomerState } from "../models/IUpdateCustomerState";



export default class UpdateCustomerStateService {
    async execute({ id, active }: IUpdateCustomerState): Promise<Customer> {
        const customer = await customerRepositories.findById(id);
        if (!customer) {
            throw new AppError('Profissional não encontrado', 404);
        }

        customer.active = active;
        await customerRepositories.save(customer);
        return customer;
    }
}