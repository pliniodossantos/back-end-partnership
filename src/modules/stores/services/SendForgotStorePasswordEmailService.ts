
import { sendEmail } from "../../../config/email";
import AppError from "../../../shared/errors/AppError";
import { storeRepositories } from "../infra/database/repositories/StoresRepositories";
import { storeTokensRepositories } from "../infra/database/repositories/StoreTokenRepositories";
import { IForgotStorePassword } from "../models/IForgotStorePassword";



export default class SendForgotStorePasswordEmailService{
    async execute ({email}: IForgotStorePassword): Promise <void> {
        const store = await storeRepositories.findByEmail(email);

        if(!store){
            throw new AppError('Loja Não Encontrada', 404);
        }

        const token = await storeTokensRepositories.generate(store.id);
        
        sendEmail({
            to: email,
            subject: "Recuperação de senha",
            body:`<div style="margin-left:30px"><h2>Olá ${store.name}</h2><br /><h3>Seu Token de Recuperação está aqui:</h3> <br /> <p>${token?.token}</p>  </div>`
        })
    }
}