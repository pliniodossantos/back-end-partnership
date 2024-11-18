
import { sendEmail } from "../../../config/email";
import AppError from "../../../shared/errors/AppError";
import { customerRepositories } from "../infra/database/repositories/CustomersRepositories";
import { customerTokensRepositories } from "../infra/database/repositories/CustomerTokensRepositories";
import { IForgotCustomerPassword } from "../models/IForgotCustomerPassword";


export default class SendForgotCustomerPasswordEmailService{
    async execute ({email}: IForgotCustomerPassword): Promise <void> {
        const customer = await customerRepositories.findByEmail(email);

        if(!customer){
            throw new AppError('Usuário Não Encontrado', 404);
        }

        const token = await customerTokensRepositories.generate(customer.id);
        
        sendEmail({
            to: email,
            subject: "Recuperação de senha",
            body:`<div style="margin-left:30px"><h2>Olá ${customer.name}</h2><br /><h3>Seu Token de Recuperação está aqui:</h3> <br /> <p>${token?.token}</p>  </div>`
        })
    }
}