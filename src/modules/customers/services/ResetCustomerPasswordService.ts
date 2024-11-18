import { addHours, isAfter } from "date-fns";
import AppError from "../../../shared/errors/AppError";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { customerTokensRepositories } from "../infra/database/repositories/CustomerTokensRepositories";
import { IResetCustomerPassword } from "../models/IResetCustomerPassword";
import { hash } from "bcrypt";



export default class ResetCustomerPasswordService{
    async execute ({token, password}: IResetCustomerPassword): Promise<void>{
        const customerToken = await customerTokensRepositories.findByToken(token);

        if (!customerToken) {
            throw new AppError('token inexistente', 404);
        }

        const customer = await customerRepositories.findById(customerToken.customer_id);

        if (!customer) {
            throw new AppError("Cliene Não Existe")
        }

        const  tokenCreatedAt = customerToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 1);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token Expirado', 401)
        }
        customer.password = await hash(password, 10);

        await customerRepositories.save(customer);
    }
}