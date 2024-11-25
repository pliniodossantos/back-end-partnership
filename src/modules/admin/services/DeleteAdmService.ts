import AppError from "../../../shared/errors/AppError";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";
import { IDeleteAdmin } from "../models/IDeleteAdmin";





export default class DeleteAdmService {
    async execute ({id}: IDeleteAdmin): Promise<void>{
        const admin = await adminRepositories.findById(id);
       
        if (!admin) {
            throw new AppError('Adm não encontrado', 404);
        }

        await adminRepositories.remove(admin);
    }
}