import AppError from "../../../shared/errors/AppError";
import { hash } from "bcrypt";
import { ICreateConsultant } from "../models/ICreateConsultant";
import { ISessionConsultantResponse } from "../models/ISessionConsultantResponse";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";
import { storeRepositories } from "../../stores/infra/database/repositories/StoresRepositories";
import { Secret, sign } from "jsonwebtoken";


export default class CreateConsultantService{
    async execute({name, email, cpf, password, active = true, birthday, cnpjStore}: ICreateConsultant): Promise<ISessionConsultantResponse>{
        const emailExists = await consultantsRepositories.findByEmail(email);
        const cpfjExists = await consultantsRepositories.findByCpf(cpf);
        const storeExists = await storeRepositories.findByCnpj(cnpjStore)
        if(emailExists){
            throw new AppError('Este email já está em uso', 409);
        }
        if(cpfjExists){
            throw new AppError('Este cpf já está em uso', 409);
        }
        if (!storeExists) {
            throw new AppError('Loja não encontrada', 404);
        }

        const store_id = storeExists.id;
        const hashedPassword = await hash(password, 10);
        const consultant = consultantsRepositories.create({
            name,
            email,
            cpf,
            password: hashedPassword,
            active,
            birthday,
            store_id
            
        });

        

        await consultantsRepositories.save(consultant);
        
        const token = sign({}, process.env.CONSULTANT_SECRET as Secret,{
            subject: String(consultant.id),
            expiresIn: '5d',
        });

        return{
            consultant,
            token
        }

    }

}