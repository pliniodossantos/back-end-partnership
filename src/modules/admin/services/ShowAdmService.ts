import AppError from "../../../shared/errors/AppError";
import { Admin } from "../infra/database/entities/Admin";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";
import { IShowAdm } from "../models/IShowAdm";



export default class ShowAdmService {
    async execute({id}: IShowAdm): Promise<Admin> {
        
        const admin = await adminRepositories.findById(id);
        if(!admin){
            throw new AppError('Adm não encontrado', 404);
        }
       
        return admin;
        
    }
}