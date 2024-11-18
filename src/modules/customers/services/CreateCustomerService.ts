
import AppError from "../../../shared/errors/AppError";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { ICreateCustomer } from "../models/ICreateCustomer";
import { hash } from "bcrypt";
import { ISessionCustomerResponse } from "../models/ISessionCustomerResponse";
import { Secret, sign } from "jsonwebtoken";


export default class CreateCustomerService{
    async execute({name, email, cpfOrCnpj, password, active = true, birthday, complement}: ICreateCustomer): Promise<ISessionCustomerResponse>{
        const emailExists = await customerRepositories.findByEmail(email);
        const cpfOrCnpjExists = await customerRepositories.findByCPFOrCnpj(cpfOrCnpj);
        


        if(emailExists){
            throw new AppError('Este email já está em uso', 409);
        }
        if(cpfOrCnpjExists){
            throw new AppError('Este cpf/cnpj já está em uso', 409);
        }
       
        const hashedPassword = await hash(password, 10);
        const customer = customerRepositories.create({
            name,
            email,
            cpfOrCnpj,
            password: hashedPassword,
            active,
            birthday,
            complement,
        });

        

        await customerRepositories.save(customer);
        
        const token = sign({}, process.env.APP_SECRET as Secret,{
            subject: String(customer.id),
            expiresIn: '5d',
        });

        return{
            customer,
            token
        }

    }

}