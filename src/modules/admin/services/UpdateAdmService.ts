import AppError from "../../../shared/errors/AppError";
import { Admin } from "../infra/database/entities/Admin";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";
import { IUpdateAdmin } from "../models/IUpdateAdmin";

export default class UpdateAdmService {
    async execute({ id, name, email, cpf }: IUpdateAdmin): Promise<Admin> {
        const admin = await adminRepositories.findById(id);
        const emailExists = await adminRepositories.findByEmail(email);
        const cpfExists = await adminRepositories.findByCpf(cpf);
        if (!admin) {
            throw new AppError('Adm não encontrado', 404);
        }

        if(admin.email == email && admin.cpf == cpf){
            admin.name = name;
            await adminRepositories.save(admin);
            return admin;
        }
        if(admin.email == email && admin.cpf != cpf && !cpfExists){
            admin.name = name;
            admin.cpf = cpf;
            await adminRepositories.save(admin);
            return admin;
        }
        if(admin.cpf == cpf && admin.email != email   && !emailExists){
            admin.name = name;
            admin.email = email;
            await adminRepositories.save(admin);
            return admin;
        }
        if (cpfExists || emailExists) {
            throw new AppError('Este cpf ou email já está em uso', 409);
        }
     
        admin.name = name;
        admin.email = email;
        admin.cpf = cpf;
    
        await adminRepositories.save(admin);
        return admin;
    }
}