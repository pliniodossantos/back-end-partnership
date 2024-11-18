import AppError from "../../../shared/errors/AppError";
import { Customer } from "../infra/database/entities/Customer";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { IUpdateCustomer } from "../models/IUpdateCustomer";




export default class UpdateCustomerService {
    async execute({ id, name, email, cpfOrCnpj, birthday, complement }: IUpdateCustomer): Promise<Customer> {
        const customer = await customerRepositories.findById(id);
        const emailExists = await customerRepositories.findByEmail(email);
        const cpfOrCnpjExists = await customerRepositories.findByCPFOrCnpj(cpfOrCnpj);
        if (!customer) {
            throw new AppError('Profissional não encontrado', 404);
        }

        if(customer.email == email && customer.cpfOrCnpj == cpfOrCnpj){
            customer.name = name;
            customer.birthday = birthday;
            customer.complement = complement;
    
            await customerRepositories.save(customer);
            return customer;
        }
        if(customer.email == email && customer.cpfOrCnpj != cpfOrCnpj && !cpfOrCnpjExists){
            customer.name = name;
            customer.birthday = birthday;
            customer.complement = complement;
            customer.cpfOrCnpj = cpfOrCnpj;
            await customerRepositories.save(customer);
            return customer;
        }
        if(customer.cpfOrCnpj == cpfOrCnpj && customer.email != email   && !emailExists){
            customer.name = name;
            customer.birthday = birthday;
            customer.complement = complement;
            customer.email = email;
            await customerRepositories.save(customer);
            return customer;
        }
        if (cpfOrCnpjExists || emailExists) {
            throw new AppError('Este cpf/cnpj ou email já está em uso', 409);
        }
     
        customer.name = name;
        customer.email = email;
        customer.cpfOrCnpj = cpfOrCnpj;
        customer.birthday = birthday;
        customer.complement = complement;

        await customerRepositories.save(customer);
        return customer;
    }
}