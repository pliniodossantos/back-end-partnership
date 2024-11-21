import AppError from "../../../shared/errors/AppError";
import { Consultant } from "../infra/database/entities/Consultant";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";
import { IShowConsultant } from "../models/IShowConsultant";


export default class ShowConsultantService {
    async execute({id}: IShowConsultant): Promise<Consultant> {
        
        const consultant = await consultantsRepositories.findById(id);
        if(!consultant){
            throw new AppError('Consultor não encontrado', 404);
        }
       
        return consultant;
        
    }
}