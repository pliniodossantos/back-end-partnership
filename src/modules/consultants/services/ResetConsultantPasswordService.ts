import { addHours, isAfter } from "date-fns";
import AppError from "../../../shared/errors/AppError";
import { hash } from "bcrypt";
import { IResetConsultantPassword } from "../models/IResetConsultantPassword";
import { consultantTokenRepositories } from "../infra/database/respositories/ConsultantTokenRepositories";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";



export default class ResetConsultantPasswordService{
    async execute ({token, password}: IResetConsultantPassword): Promise<void>{
        const consultantToken = await consultantTokenRepositories.findByToken(token);

        if (!consultantToken) {
            throw new AppError('token inexistente', 404);
        }

        const consultant = await consultantsRepositories.findById(consultantToken.consultant_id);

        if (!consultant) {
            throw new AppError("Consultor Não Existe")
        }

        const  tokenCreatedAt = consultantToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 1);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token Expirado', 401)
        }
        consultant.password = await hash(password, 10);

        await consultantsRepositories.save(consultant);
    }
}