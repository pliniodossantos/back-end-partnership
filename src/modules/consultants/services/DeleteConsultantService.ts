import AppError from "../../../shared/errors/AppError";
import { consultantsRepositories } from "../infra/database/respositories/ConsultantsRepositories";
import { IDeleteConsultant } from "../models/IDeleteConsultant";




export default class DeleteConsultantService {
    async execute ({id}: IDeleteConsultant): Promise<void>{
        const consultant = await consultantsRepositories.findById(id);
       
        if (!consultant) {
            throw new AppError('Consultor não encontrado', 404);
        }

        await consultantsRepositories.remove(consultant);
    }
}