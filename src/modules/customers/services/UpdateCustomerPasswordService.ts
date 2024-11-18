import { compare, hash } from "bcrypt";
import AppError from "../../../shared/errors/AppError";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { IUpdatePasswordCustomer } from "../models/IUpdatePasswordCustomer";



export default class UpdateCustomerPasswordService{
    async reset({id, oldPassword, newPassword}: IUpdatePasswordCustomer): Promise<void>{
        const customer =  await customerRepositories.findById(id);

        if (!customer) {
            throw new AppError("Usuário não encontrado")
        }
        const oldPasswordConfirmed = await compare(oldPassword, customer.password)
        if (!oldPasswordConfirmed) {
          throw new AppError("Senha atual incorreta", 401)  
        }

        customer.password = await hash(newPassword,10);
        await customerRepositories.save(customer);
    }
}