import { compare, hash } from "bcrypt";
import AppError from "../../../shared/errors/AppError";
import { IUpdatePasswordConsultant } from "../models/IUpdatePasswordConsultant";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";


export default class UpdateConsultantPasswordService{
    async reset({id, oldPassword, newPassword}: IUpdatePasswordConsultant): Promise<void>{
        const consultant =  await consultantsRepositories.findById(id);

        if (!consultant) {
            throw new AppError("Consultor não encontrado")
        }
        const oldPasswordConfirmed = await compare(oldPassword, consultant.password)
        if (!oldPasswordConfirmed) {
          throw new AppError("Senha atual incorreta", 401)  
        }

        consultant.password = await hash(newPassword,10);
        await consultantsRepositories.save(consultant);
    }
}