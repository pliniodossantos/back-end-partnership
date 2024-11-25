import { sendEmail } from "../../../config/email";
import AppError from "../../../shared/errors/AppError";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";
import { adminTokenRepositorires } from "../infra/database/repositories/AdminTokenRepositorires";
import { IForgotAdminPassword } from "../models/IForgotAdminPassword";





export default class SendForgotAdmPasswordEmailService{
    async execute ({email}: IForgotAdminPassword): Promise <void> {
        const admin = await adminRepositories.findByEmail(email);

        if(!admin){
            throw new AppError('Adm Não Encontrado', 404);
        }

        const token = await adminTokenRepositorires.generate(admin.id);
        
        sendEmail({
            to: email,
            subject: "Recuperação de senha",
            body:`<div style="margin-left:30px"><h2>Olá ${admin.name}</h2><br /><h3>Seu Token de Recuperação está aqui:</h3> <br /> <p>${token?.token}</p>  </div>`
        })
    }
}