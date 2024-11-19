import { Customer } from "../infra/database/entities/Customer";
import { IShowCustomer } from "../models/IShowCustomer";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import AppError from "../../../shared/errors/AppError";

export default class ShowCostumerService {
    async execute({id}: IShowCustomer): Promise<Customer> {
        
        const customer = await customerRepositories.findById(id);
        if(!customer){
            throw new AppError('Profissional não encontrado', 404);
        }
       
        return customer;
        
    }
}