import { compare, hash } from "bcrypt";
import { IUpdatePasswordAdmin } from "../models/IUpdatePasswordAdmin";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";
import AppError from "../../../shared/errors/AppError";

export default class UpdateAdmPasswordService{
    async reset({id, oldPassword, newPassword}: IUpdatePasswordAdmin): Promise<void>{
        const admin =  await adminRepositories.findById(id);

        if (!admin) {
            throw new AppError("Adm não encontrado")
        }
        const oldPasswordConfirmed = await compare(oldPassword, admin.password)
        if (!oldPasswordConfirmed) {
          throw new AppError("Senha atual incorreta", 401)  
        }

        admin.password = await hash(newPassword,10);
        await adminRepositories.save(admin);
    }
}