import AppError from "../../../shared/errors/AppError";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { IDeleteCustomer } from "../models/IDeleteCustomer";


export default class DeleteCustomerService {
    async execute ({id}: IDeleteCustomer): Promise<void>{
        const customer = await customerRepositories.findById(id);
       
        if (!customer) {
            throw new AppError('Profissional não encontrado', 404);
        }

        await customerRepositories.remove(customer);
    }
}