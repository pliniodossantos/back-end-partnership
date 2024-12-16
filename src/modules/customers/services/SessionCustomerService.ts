import { compare } from "bcrypt";
import AppError from "../../../shared/errors/AppError";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { ISessionCustomer } from "../models/ISessionCustomer";
import { ISessionCustomerResponse } from "../models/ISessionCustomerResponse";
import { Secret, sign } from "jsonwebtoken";



export default class SessionCustomerService{
    async execute ({cpfOrCnpj, password}: ISessionCustomer ): Promise<ISessionCustomerResponse>{
        const customer = await customerRepositories.findByCPFOrCnpj(cpfOrCnpj);
        if(!customer){
            throw new AppError('CPF/CNPJ ou Senha incorreto',401)
        }

        const passwordConfirmed = await compare(password, customer.password)
        if(!passwordConfirmed){
            throw new AppError('CPF/CNPJ ou Senha incorreto',401)
        }
        if(customer?.active == false){
            throw new AppError('Usuário inativo, entrar em contato com o administrador',401)

        }

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