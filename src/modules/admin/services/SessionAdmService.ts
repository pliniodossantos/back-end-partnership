import { compare } from "bcrypt";
import { ISessionAdmin } from "../models/ISessionAdmin";
import { ISessionAdminResponse } from "../models/ISessionAdminResponse";
import { adminRepositories } from "../infra/database/repositories/AdminRepositories";
import AppError from "../../../shared/errors/AppError";
import { Secret, sign } from "jsonwebtoken";



export default class SessionAdmService{
    async execute ({cpf, password}: ISessionAdmin ): Promise<ISessionAdminResponse>{
        const admin = await adminRepositories.findByCpf(cpf);
        
        if(!admin){
            throw new AppError('CPF ou Senha incorreto',401)
        }

        const passwordConfirmed = await compare(password, admin.password)
        if(!passwordConfirmed){
            throw new AppError('CPF ou Senha incorreto',401)
        }

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