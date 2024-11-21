
import { sendEmail } from "../../../config/email";
import AppError from "../../../shared/errors/AppError";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";
import { consultantTokenRepositories } from "../infra/database/respositories/ConsultantTokenRepositories";
import {IForgotConsultantPassword} from "../models/IForgotConsultantPassword";




export default class SendForgotConsultantPasswordEmailService{
    async execute ({email}: IForgotConsultantPassword): Promise <void> {
        const consultant = await consultantsRepositories.findByEmail(email);

        if(!consultant){
            throw new AppError('Consultor Não Encontrado', 404);
        }

        const token = await consultantTokenRepositories.generate(consultant.id);
        
        sendEmail({
            to: email,
            subject: "Recuperação de senha",
            body:`<div style="margin-left:30px"><h2>Olá ${consultant.name}</h2><br /><h3>Seu Token de Recuperação está aqui:</h3> <br /> <p>${token?.token}</p>  </div>`
        })
    }
}