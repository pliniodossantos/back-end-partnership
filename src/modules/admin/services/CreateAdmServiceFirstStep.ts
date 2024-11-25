import { sendEmail } from "../../../config/email";
import AppError from "../../../shared/errors/AppError";
export default class CreateAdmServiceFirstStep{
    async execute (): Promise <void> {
        
        if (!process.env.ADM_Email) {
            throw new AppError('falha ao enviar chave de acesso',404)
        }

        sendEmail({
            to: process.env.ADM_Email,
            subject: "Chave de acesso novo ADM",
            body:`<div style="margin-left:30px"><h2>Olá</h2><br /><h3>Sua chave de acesso está aqui:</h3> <br /> <p>${process.env.ADM_KEY}</p>  </div>`
        })
    }
}