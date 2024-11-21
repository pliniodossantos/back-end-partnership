import { compare } from "bcrypt";
import AppError from "../../../shared/errors/AppError";
import { Secret, sign } from "jsonwebtoken";
import { ISessionConsultant } from "../models/ISessionConsultant";
import { ISessionConsultantResponse } from "../models/ISessionConsultantResponse";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";


export default class SessionConsultantService{
    async execute ({cpf, password}: ISessionConsultant ): Promise<ISessionConsultantResponse>{
        const consultant = await consultantsRepositories.findByCpf(cpf);
        
        if(!consultant){
            throw new AppError('CPF ou Senha incorreto',401)
        }

        const passwordConfirmed = await compare(password, consultant.password)
        if(!passwordConfirmed){
            throw new AppError('CPF ou Senha incorreto',401)
        }

        const token = sign({}, process.env.CONSULTANT_SECRET as Secret,{
            subject: String(consultant.id),
            expiresIn: '5d',
        });
        console.log(token);
        return{
            consultant,
            token
        }
    }
}