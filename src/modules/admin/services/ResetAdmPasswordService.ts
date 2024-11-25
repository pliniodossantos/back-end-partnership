import { addHours, isAfter } from "date-fns";
import { hash } from "bcrypt";
import { IResetAdminPassword } from "../models/IResetAdminPassword";
import { adminTokenRepositorires } from "../infra/database/repositories/AdminTokenRepositorires";
import AppError from "../../../shared/errors/AppError";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";



export default class ResetAdmPasswordService{
    async execute ({token, password}: IResetAdminPassword): Promise<void>{
        const adminToken = await adminTokenRepositorires.findByToken(token);

        if (!adminToken) {
            throw new AppError('token inexistente', 404);
        }

        const admin = await adminRepositories.findById(adminToken.admin_id);

        if (!admin) {
            throw new AppError("Adm Não Existe")
        }

        const  tokenCreatedAt = adminToken.created_at;
        const compareDate = addHours(tokenCreatedAt, 1);

        if (isAfter(Date.now(), compareDate)) {
            throw new AppError('Token Expirado', 401)
        }
        admin.password = await hash(password, 10);

        await adminRepositories.save(admin);
    }
}