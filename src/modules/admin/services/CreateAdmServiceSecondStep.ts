import { hash } from "bcrypt";
import { Secret, sign } from "jsonwebtoken";
import { ICreateAdminSecondStep } from "../models/ICreateAdminSecondStep";
import { ISessionAdminResponse } from "../models/ISessionAdminResponse";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";
import AppError from "../../../shared/errors/AppError";


export default class CreateAdmServiceSecondStep{
    async execute({name, email, cpf, password, keyAcess}: ICreateAdminSecondStep): Promise<ISessionAdminResponse>{
        const emailExists = await adminRepositories.findByEmail(email);
        const cpfExists = await adminRepositories.findByCpf(cpf);
        
        if(emailExists){
            throw new AppError('Este email já está em uso', 409);
        }
        if(cpfExists){
            throw new AppError('Este cpf já está em uso', 409);
        }
        if(keyAcess!=process.env.ADM_KEY){
            throw new AppError('Chave de acesso negada', 409);
        }
       
        const hashedPassword = await hash(password, 10);
        const admin = adminRepositories.create({
            name,
            email,
            cpf,
            password: hashedPassword,
        });

        

        await adminRepositories.save(admin);
        
        const token = sign({}, process.env.ADM_SECRET as Secret,{
            subject: String(admin.id),
            expiresIn: '5d',
        });

        return{
            admin,
            token
        }

    }

}