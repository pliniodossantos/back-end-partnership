import AppError from "../../../shared/errors/AppError";
import { Consultant } from "../infra/database/entities/Consultant";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";
import { IUpdateConsultant } from "../models/IUpdateConsultant";


export default class UpdateConsultantService {
    async execute({ id, name, email, cpf, birthday}: IUpdateConsultant): Promise<Consultant> {
        const consultant = await consultantsRepositories.findById(id);
        const emailExists = await consultantsRepositories.findByEmail(email);
        const cpfExists = await consultantsRepositories.findByCpf(cpf);
        if (!consultant) {
            throw new AppError('Consultor não encontrado', 404);
        }

        if(consultant.email == email && consultant.cpf == cpf){
            consultant.name = name;
            consultant.birthday = birthday;
    
            await consultantsRepositories.save(consultant);
            return consultant;
        }
        if(consultant.email == email && consultant.cpf != cpf && !cpfExists){
            consultant.name = name;
            consultant.birthday = birthday;
            consultant.cpf = cpf;
            await consultantsRepositories.save(consultant);
            return consultant;
        }
        if(consultant.cpf == cpf && consultant.email != email   && !emailExists){
            consultant.name = name;
            consultant.birthday = birthday;
            consultant.email = email;
            await consultantsRepositories.save(consultant);
            return consultant;
        }
        if (cpfExists || emailExists) {
            throw new AppError('Este cpf ou email já está em uso', 409);
        }
     
        consultant.name = name;
        consultant.email = email;
        consultant.cpf = cpf;
        consultant.birthday = birthday;

        await consultantsRepositories.save(consultant);
        return consultant;
    }
}